import Common from './Common.js';
import Fsuipc from './Fsuipc.js';

/**
 * Handling the connection to Microsoft Flight Simulator via FSUIPC Websocket Server by Paul Henty
 *
 * Documentation: http://fsuipcwebsockets.paulhenty.com/
 */
export default class FsuipcConnection {

	constructor(url, aircraftPanelId, aircraftValues, offsetMap, messageCallback, options) {
		this.url = url;
		this.aircraftPanelId = aircraftPanelId;
		this.aircraftValues = aircraftValues;
		this.offsetMap = offsetMap;
		this.messageCallback = messageCallback;
		this.options = {
			debug: false,
		};
		if (typeof options == 'object') {
			$.extend(this.options, options);
		}

		this.offsetsDeclaration = null;
		this.lVarsDeclaration = null;

		console.log('FSUIPC Websocket Connection opening...');
		this.openConnection();
	}

	openConnection() {
		this.ws = new WebSocket(this.url, 'fsuipc');

		this.ws.onopen = () => {
			console.log('FSUIPC Websocket Connection is open');

			$('.only-on-connected').prop('disabled', false).removeClass('disabled');

			// Get "About" info
			var request = {
				command: 'about.read',
				name: 'about',
			};
			this.sendMessage(request);

			var fullOffsetMap = Fsuipc.map();

			// Declare offsets for general sim info (that won't usually change throughout a session)
			this.sendMessage({
				command: 'offsets.declare',
				name: 'simInfoOffsets',
				offsets: [
					{name: 'aircraftName', address: fullOffsetMap.aircraftName.address, type: fullOffsetMap.aircraftName.type, size: fullOffsetMap.aircraftName.size},
				],
			});

			// Declare offsets for sending flight sim controls
			this.sendMessage({
				command: 'offsets.declare',
				name: 'simControlOffsets',
				offsets: [
					//must be in this order (https://forum.simflight.com/topic/90512-best-way-to-make-browser-interface-with-fsuipc/page/2/?tab=comments#comment-562656)
					{name: 'simControlParam', address: 0x3114, type: 'uint', size: 4},
					{name: 'simControlNumber', address: 0x3110, type: 'uint', size: 4},
				],
			});

			// Get general sim values
			this.sendMessage({
				command: 'offsets.read',
				name: 'simInfoOffsets',
			});

			// Declare offsets for aircraft and start monitoring them
			if (typeof this.aircraftValues != 'undefined' && typeof this.aircraftValues.offset !== 'undefined') {
				this.offsetsDeclaration = Fsuipc.makeOffsetsArrayForAircraft(this.aircraftValues.offset, this.offsetMap);

				this.declareAndMonitorOffsets('aircraftOffsets', this.offsetsDeclaration);
			}

			// Declare vars (Lvars) for aircraft and start monitoring them
			if (typeof this.aircraftValues !== 'undefined' && typeof this.aircraftValues.lVar !== 'undefined') {
				this.lVarsDeclaration = [];
				Object.keys(this.aircraftValues.lVar).forEach((key) => {
					this.lVarsDeclaration.push({name: key});
				});

				this.declareAndMonitorLVars('aircraftLVars', this.lVarsDeclaration);
			}

/*
CODE FOR SETTING A GIVEN LAT/LON AND ALTITUDE! (CAN'T BE USED WITHIN BUSH TRIPS IT LOOKS LIKE!)
			this.sendMessage({
				command: 'offsets.declare',
				name: 'aircraftPosition',
				offsets: [
					{name: 'latitude', address: 0x0560, type: 'lat', size: 8},
					{name: 'longitude', address: 0x0568, type: 'lon', size: 8},
					{name: 'altitude', address: 0x0574, type: 'int', size: 4},   // this makes the value be in meters (source: https://forum.simflight.com/topic/65126-fsuipc-offset-0570/)
				],
			});

			this.sendMessage({
				command: 'offsets.read',
				name: 'aircraftPosition',
			});

			setTimeout(() => {
				this.sendMessage({
					command: 'offsets.write',
					name: 'aircraftPosition',
					offsets: [
						 {name: 'latitude', value: 37.704546},
						 {name: 'longitude', value: -119.712201},
						 {name: 'altitude', value: 2150},
					]
				});
			}, 2000);
*/
		};

		this.ws.onclose = () => {
			var retryInSecs = 10;
			console.log('FSUIPC Websocket Connection closed');
			Common.showError('FSUIPC Websocket Connection failed - trying again in '+ retryInSecs +' secs...', {timeout: retryInSecs*1000});
			// this.ws = null;
			$('.only-on-connected').prop('disabled', true).addClass('disabled');
			setTimeout(() => {
				console.log('Retrying opening FSUIPC Websocket Connection...');
				this.openConnection();
			}, retryInSecs*1000);
		};

		this.ws.onmessage = (msg) => {
			if (this.options.debug) {
				console.log('%cRECEIVED\n'+ JSON.stringify(JSON.parse(msg.data), null, 2), 'color: #04529a');
			}

			var response = JSON.parse(msg.data);

			if (response.success) {
				if (response.name == 'about') {
					if (!this.options.debug) console.log(response);

				} else if (response.name == 'aircraftOffsets') {
					if (response.command == 'offsets.read') {
						if (response.data) {
							Object.keys(this.aircraftValues.offset).forEach((refName) => {
								// Get the raw value from FSUIPC
								var rawValue, internalValue;
								if (typeof response.data[refName] != 'undefined') {
									// regular offset
									rawValue = response.data[refName];
								} else if (!this.offsetMap[refName] && !this.options.allowUnknownOffsets) {
									// offset has not been defined
									Common.showError('The offset '+ refName +' has not been defined. Skipping.');
									return true;
								} else if (
									typeof this.offsetMap[refName] != 'undefined' &&
									typeof this.offsetMap[refName].bit != 'undefined' &&
									typeof response.data[ this.offsetMap[refName].address ] != 'undefined' &&
									typeof response.data[ this.offsetMap[refName].address ][ this.offsetMap[refName].bit ] != 'undefined') {
									// a value that is a given bit in an offset
									rawValue = response.data[ this.offsetMap[refName].address ][ this.offsetMap[refName].bit ];
								} else {
									// skip this offset as its value is not part included in the current response
									if (this.options.debug >= 2) {
										console.log('Skipping '+ refName);
									}
									return true;
								}

								// Convert the value received from FSUIPC if needed
								internalValue = Fsuipc.rawToInternalConversion(this.aircraftPanelId, 'offset', refName, rawValue);

								// Update the HTML component
								this.messageCallback('offset', refName, internalValue);
							});
						}
					}

				} else if (response.name == 'aircraftLVars') {
					if (response.command == 'vars.read') {
						if (response.data) {
							Object.keys(this.aircraftValues.lVar).forEach((refName) => {
								// Get the raw value from FSUIPC
								var rawValue, internalValue;
								if (typeof response.data[refName] != 'undefined') {
									// regular offset
									rawValue = response.data[refName];
								} else {
									// skip this offset as its value is not part included in the current response
									if (this.options.debug >= 2) {
										console.log('Skipping '+ refName);
									}
									return true;
								}

								// Convert the value received from FSUIPC if needed
								internalValue = Fsuipc.rawToInternalConversion(this.aircraftPanelId, 'lVar', refName, rawValue);

								// Update the HTML component
								this.messageCallback('lVar', refName, internalValue);
							});
						}
					}

				} else if (response.name == 'simControlOffsets') {
					if (!response.success) {
						alert('Failed to declare offsets for sim controls.');
					}
				} else if (response.name == 'simInfoOffsets') {
					if (!response.success) {
						alert('Failed to declare offsets for general sim info.');
					}
				} else if (response.command == 'vars.write' && response.success == true) {
					// success writing var
				} else if (response.command == 'vars.calc' && response.success == true) {
					// success writing calculator code
				} else {
					console.log('Unknown name: ' + response.name);
					Common.showError('ERROR IN '+ msg.data);
				}
			} else {
				var error = 'Error for ' + response.name + ' (' + response.command + '): ';
				error += response.errorCode + ' - ' + response.errorMessage;
				Common.showError(error);
			}
		};
	}

	close() {
		this.ws.close();
	}

	/**
	 * @param {object} request
	 */
	sendMessage(request) {
		if (this.options.debug) {
			console.log('%cSENT\n'+ JSON.stringify(request, null, 2), 'color: green');
		}
		this.ws.send(JSON.stringify(request));
	}

	/**
	 * @param {string[]} groupName Your name for this group of offsets
	 * @param {object[]} offsets Array of offset objects according to http://fsuipcwebsockets.paulhenty.com/#jsonoffsetsdeclare
	 *                           Can be created using [[Fsuipc.makeOffsetsArrayForAircraft()]]
	 */
	declareAndMonitorOffsets(groupName, offsets, updateAircraftValues) {
		// Declare offsets to monitor
		this.sendMessage({
			command: 'offsets.declare',
			name: groupName,
			offsets: offsets,
		});

		if (updateAircraftValues) {  //no need for this when the standard implementation calls this function, it's mainly for the testing panel where we dynamically change values to monitor. And it's needed for processing the incoming responses above.
			offsets.forEach(item => {
				if (typeof this.aircraftValues.offset[item.name] == 'undefined') {
					this.aircraftValues.offset[item.name] = 'pass';
				}
			});
		}

		// Get initial values (can't do this while monitoring on an interval)
		this.sendMessage({
			command: 'offsets.read',
			name: groupName,
		});

		// Start monitoring offsets
		this.sendMessage({
			command: 'offsets.read', // Tell the server to read offsets
			name: groupName, // An ID so we can match the response
			interval: 100, // Send every 100ms - specify 0 for read once (no repeat)
			changesOnly: true,
		});
	}

	/**
	 * @param {string[]} groupName Your name for this group of lVars
	 * @param {string[]} lVars Array of Lvar names to monitor
	 */
	declareAndMonitorLVars(groupName, lVars, updateAircraftValues) {
		// Declare vars to monitor
		this.sendMessage({
			command: 'vars.declare',
			name: groupName,
			vars: lVars,
		});

		if (updateAircraftValues) {  //no need for this when the standard implementation calls this function, it's mainly for the testing panel where we dynamically change values to monitor. And it's needed for processing the incoming responses above.
			lVars.forEach(item => {
				if (typeof this.aircraftValues.lVar[item.name] == 'undefined') {
					this.aircraftValues.lVar[item.name] = 'pass';
				}
			});
		}

		// Get initial values (can't do this while monitoring on an interval)
		this.sendMessage({
			command: 'vars.read',
			name: groupName,
		});

		// Start monitoring vars
		this.sendMessage({
			command: 'vars.read', // Tell the server to read vars
			name: groupName, // An ID so we can match the response
			interval: 100, // Send every 100ms - specify 0 for read once (no repeat)
			changesOnly: true,
		});
	}

	undeclareOffsets(groupName) {
		// Stop monitoring
		this.sendMessage({
			command: 'offsets.stop',
			name: groupName,
		});
		// Remove group
		this.sendMessage({
			command: 'offsets.remove',
			name: groupName,
		});
	}

	undeclareLVars(groupName) {
		// Stop monitoring
		this.sendMessage({
			command: 'vars.stop',
			name: groupName,
		});
		// Remove group
		this.sendMessage({
			command: 'vars.remove',
			name: groupName,
		});
	}

}
