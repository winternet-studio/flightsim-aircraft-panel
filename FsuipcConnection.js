import Fsuipc from './Fsuipc.js';
import FsuipcConversion from './FsuipcConversion.js';

/**
 * Handling the connection to Microsoft Flight Simulator via FSUIPC Websocket Server by Paul Henty
 *
 * Documentation: http://fsuipcwebsockets.paulhenty.com/
 */
export default class FsuipcConnection {

	constructor(url, aircraftId, aircraftClass, options) {
		var myself = this;

		this.url = url;
		this.aircraftId = aircraftId;
		this.aircraftClass = aircraftClass;
		this.options = {
			debug: false,
		};
		if (typeof options == 'object') {
			$.extend(this.options, options);
		}

		this.offsetsDeclaration = null;

		this.ws = new WebSocket(this.url, 'fsuipc');

		this.ws.onopen = function () {
			console.log('FSUIPC Websocket Connection is open');

			$('.only-on-connected').prop('disabled', false).removeClass('disabled');

			// Get "About" info
			var request = {
				command: 'about.read',
				name: 'about',
			};
			myself.sendMessage(request);

			this.offsetsDeclaration = Fsuipc.makeOffsetsArrayForAircraft(myself.aircraftClass);

			// Declare offsets to monitor
			myself.sendMessage({
				command: 'offsets.declare',
				name: 'aircraftOffsets',
				offsets: this.offsetsDeclaration
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
			console.log('FSUIPC Websocket Connection closed');
			// this.ws = null;
			$('.only-on-connected').prop('disabled', true).addClass('disabled');
			setTimeout(function() {
				myself.ws = new WebSocket(myself.url, 'fsuipc');
			}, 10000);
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
							var Conversion = new FsuipcConversion(myself.aircraftId);
							var theOffsets = myself.aircraftClass.getOffsets();
							var offsetMap = Fsuipc.map();
							Object.keys(theOffsets).forEach(function(offsetName) {
								// Get the raw value from FSUIPC
								var rawValue, finalValue;
								if (typeof response.data[offsetName] != 'undefined') {
									// regular offset
									rawValue = response.data[offsetName];
								} else if (
									typeof offsetMap[offsetName].bit != 'undefined' &&
									typeof response.data[ offsetMap[offsetName].address ] != 'undefined' &&
									typeof response.data[ offsetMap[offsetName].address ][ offsetMap[offsetName].bit ] != 'undefined') {
									// a value that is a given bit in an offset
									rawValue = response.data[ offsetMap[offsetName].address ][ offsetMap[offsetName].bit ];
								} else {
									// skip this offset as its value is not part included in the current response
									if (myself.options.debug >= 2) {
										console.log('Skipping '+ offsetName);
									}
									return true;
								}

								// Convert the value received from FSUIPC if needed
								if (typeof Conversion[offsetName] == 'object') {
									finalValue = Conversion[offsetName].from(rawValue);
								} else {
									finalValue = rawValue;
								}

								// Generate the HTML we will show on screen
								var html = theOffsets[offsetName](finalValue);
								var $elem = $('#'+ offsetName);
								if ($elem.length > 0) {
									$elem.find('.val').html(html);
									$elem.attr('data-raw-value', rawValue);
								} else {
									console.error('Element with ID '+ offsetName +' was not found.');
								}
							});
						}
					}

				} else {
					console.log('Unknown name: ' + response.name);
					document.getElementById('errorMessage').innerText = 'ERROR IN '+ msg.data;
				}
			} else {
				var error = 'Error for ' + response.name + ' (' + response.command + '): ';
				error += response.errorCode + ' - ' + response.errorMessage;
				document.getElementById('errorMessage').innerText = error;
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
