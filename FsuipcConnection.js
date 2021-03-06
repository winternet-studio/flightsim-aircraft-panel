import Common from './Common.js';
import Fsuipc from './Fsuipc.js';

/**
 * Handling the connection to Microsoft Flight Simulator via FSUIPC Websocket Server by Paul Henty
 *
 * Documentation: http://fsuipcwebsockets.paulhenty.com/
 */
export default class FsuipcConnection {

	constructor(url, aircraftPanelId, aircraftValues, offsetMap, messageCallback, options) {
		var myself = this;

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

		var myself = this;

		this.ws.onopen = function () {
			console.log('FSUIPC Websocket Connection is open');

			$('.only-on-connected').prop('disabled', false).removeClass('disabled');

			// Get "About" info
			var request = {
				command: 'about.read',
				name: 'about',
			};
			myself.sendMessage(request);

			var fullOffsetMap = Fsuipc.map();

			// Declare offsets for general sim info (that won't usually change throughout a session)
			myself.sendMessage({
				command: 'offsets.declare',
				name: 'simInfoOffsets',
				offsets: [
					{name: 'aircraftName', address: fullOffsetMap.aircraftName.address, type: fullOffsetMap.aircraftName.type, size: fullOffsetMap.aircraftName.size},
				],
			});

			// Declare offsets for sending flight sim controls
			myself.sendMessage({
				command: 'offsets.declare',
				name: 'simControlOffsets',
				offsets: [
					//must be in this order (https://forum.simflight.com/topic/90512-best-way-to-make-browser-interface-with-fsuipc/page/2/?tab=comments#comment-562656)
					{name: 'simControlParam', address: 0x3114, type: 'uint', size: 4},
					{name: 'simControlNumber', address: 0x3110, type: 'uint', size: 4},
				],
			});

			// Declare offsets for aircraft and start monitoring them
			if (typeof myself.aircraftValues.offset !== 'undefined') {
				this.offsetsDeclaration = Fsuipc.makeOffsetsArrayForAircraft(myself.aircraftValues.offset, myself.offsetMap);

				// Declare offsets to monitor
				myself.sendMessage({
					command: 'offsets.declare',
					name: 'aircraftOffsets',
					offsets: this.offsetsDeclaration
				});

				// Get general sim values
				myself.sendMessage({
					command: 'offsets.read',
					name: 'simInfoOffsets',
				});

				// Get initial values (can't do this while monitoring on an interval)
				myself.sendMessage({
					command: 'offsets.read',
					name: 'aircraftOffsets',
				});

				// Start monitoring offsets
				myself.sendMessage({
					command: 'offsets.read', // Tell the server to read offsets
					name: 'aircraftOffsets', // An ID so we can match the response
					interval: 100, // Send every 100ms - specify 0 for read once (no repeat)
					changesOnly: true,
				});
			}

			// Declare vars (Lvars) for aircraft and start monitoring them
			if (typeof myself.aircraftValues.lVar !== 'undefined') {
				this.lVarsDeclaration = [];
				Object.keys(myself.aircraftValues.lVar).forEach((key) => {
					this.lVarsDeclaration.push({name: key});
				});

				// Declare vars to monitor
				myself.sendMessage({
					command: 'vars.declare',
					name: 'aircraftLVars',
					vars: this.lVarsDeclaration
				});

				// Get initial values (can't do this while monitoring on an interval)
				myself.sendMessage({
					command: 'vars.read',
					name: 'aircraftLVars',
				});

				// Start monitoring vars
				myself.sendMessage({
					command: 'vars.read', // Tell the server to read vars
					name: 'aircraftLVars', // An ID so we can match the response
					interval: 100, // Send every 100ms - specify 0 for read once (no repeat)
					changesOnly: true,
				});
			}

/*
CODE FOR SETTING A GIVEN LAT/LON AND ALTITUDE! (CAN'T BE USED WITHIN BUSH TRIPS IT LOOKS LIKE!)
			myself.sendMessage({
				command: 'offsets.declare',
				name: 'aircraftPosition',
				offsets: [
					{name: 'latitude', address: 0x0560, type: 'lat', size: 8},
					{name: 'longitude', address: 0x0568, type: 'lon', size: 8},
					{name: 'altitude', address: 0x0574, type: 'int', size: 4},   // this makes the value be in meters (source: https://forum.simflight.com/topic/65126-fsuipc-offset-0570/)
				],
			});

			myself.sendMessage({
				command: 'offsets.read',
				name: 'aircraftPosition',
			});

			setTimeout(function() {
				myself.sendMessage({
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

		this.ws.onclose = function () {
			var retryInSecs = 10;
			console.log('FSUIPC Websocket Connection closed');
			Common.showError('FSUIPC Websocket Connection failed - trying again in '+ retryInSecs +' secs...', {timeout: retryInSecs*1000});
			// myself.ws = null;
			$('.only-on-connected').prop('disabled', true).addClass('disabled');
			setTimeout(function() {
				console.log('Retrying opening FSUIPC Websocket Connection...');
				myself.openConnection();
			}, retryInSecs*1000);
		};

		this.ws.onmessage = function(msg) {
			if (myself.options.debug) {
				console.log('%cRECEIVED\n'+ JSON.stringify(JSON.parse(msg.data), null, 2), 'color: #04529a');
			}

			var response = JSON.parse(msg.data);

			if (response.success) {
				if (response.name == 'about') {
					if (!myself.options.debug) console.log(response);

				} else if (response.name == 'aircraftOffsets') {
					if (response.command == 'offsets.read') {
						if (response.data) {
							Object.keys(myself.aircraftValues.offset).forEach(function(refName) {
								// Get the raw value from FSUIPC
								var rawValue, internalValue;
								if (typeof response.data[refName] != 'undefined') {
									// regular offset
									rawValue = response.data[refName];
								} else if (!myself.offsetMap[refName]) {
									// offset has not been defined
									Common.showError('The offset '+ refName +' has not been defined. Skipping.');
									return true;
								} else if (
									typeof myself.offsetMap[refName].bit != 'undefined' &&
									typeof response.data[ myself.offsetMap[refName].address ] != 'undefined' &&
									typeof response.data[ myself.offsetMap[refName].address ][ myself.offsetMap[refName].bit ] != 'undefined') {
									// a value that is a given bit in an offset
									rawValue = response.data[ myself.offsetMap[refName].address ][ myself.offsetMap[refName].bit ];
								} else {
									// skip this offset as its value is not part included in the current response
									if (myself.options.debug >= 2) {
										console.log('Skipping '+ refName);
									}
									return true;
								}

								// Convert the value received from FSUIPC if needed
								internalValue = Fsuipc.rawToInternalConversion(myself.aircraftPanelId, 'offset', refName, rawValue);

								// Update the HTML component
								myself.messageCallback('offset', refName, internalValue);
							});
						}
					}

				} else if (response.name == 'aircraftLVars') {
					if (response.command == 'vars.read') {
						if (response.data) {
							Object.keys(myself.aircraftValues.lVar).forEach(function(refName) {
								// Get the raw value from FSUIPC
								var rawValue, internalValue;
								if (typeof response.data[refName] != 'undefined') {
									// regular offset
									rawValue = response.data[refName];
								} else {
									// skip this offset as its value is not part included in the current response
									if (myself.options.debug >= 2) {
										console.log('Skipping '+ refName);
									}
									return true;
								}

								// Convert the value received from FSUIPC if needed
								internalValue = Fsuipc.rawToInternalConversion(myself.aircraftPanelId, 'lVar', refName, rawValue);

								// Update the HTML component
								myself.messageCallback('lVar', refName, internalValue);
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

}
