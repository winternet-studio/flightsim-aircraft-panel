import MobiFlightHubHopPresets from './databases/MobiFlightHubHopPresets.js';

export default class Fsuipc {

	static simControls = null;

	constructor(aircraftId) {
		this.aircraftId = aircraftId;
	}

	/**
	 * Map names to offset addresses
	 *
	 * `toggleValues` and `validValues` should hold the raw values coming from FSUIPC
	 *
	 * Possible `type` values:
	 * - `int`    A signed integer of size 1, 2, 4 or 8
	 * - `uint`   An unsigned integer of size 1, 2, 4 or 8
	 * - `float`  A floating point number of size 4 (FLOAT32) or 8 (FLOAT64)
	 * - `string` A string of any size
	 * - `lat`    A latitude of size 4 or 8. (Value is returned in decimal degrees)
	 * - `lon`    A longitude of size 4 or 8. (Value is returned in decimal degrees)
	 * - `bits`   Used for offsets where multiple systems are encoded in individual bits. A property `bit` must also be set indicating which bit is used for the given name (Each bit of the offset is returned as a seperate boolean value)
	 *
	 * @return {object}
	 */
	static map() {
		return {
			aircraftLatitude: {address: 0x6010, type: 'lat', size: 8},
			aircraftLongitude: {address: 0x6018, type: 'lon', size: 8},
			aircraftAltitude: {address: 0x0570, type: 'int', size: 8},
			aircraftHeading: {address: 0x0580, type: 'uint', size: 4},
			aircraftName: {address: 0x3D00, type: 'string', size: 256},
			alternator1Master: {address: 0x3101, type: 'uint', size: 1, toggleValues: [1, 0]},
			apuVoltage: {address: 0x0B5C, type: 'float', size: 4},
			avionicsMaster: {address: 0x2E80, type: 'uint', size: 4, toggleValues: [1, 0]},
			// avionicsMaster: {address: 0x3103, type: 'uint', size: 1, toggleValues: [1, 0]},
			batteryMaster: {address: 0x3102, type: 'uint', size: 1, toggleValues: [1, 0]},
			// batteryMaster: {address: 0x281C, type: 'uint', size: 4, toggleValues: [1, 0]},
			cowlFlapEngine1: {address: 0x37F0, type: 'float', size: 8},
			flapsHandle: {address: 0x0BDC, type: 'uint', size: 4},
			flapsPositionLeft: {address: 0x0BE0, type: 'uint', size: 4},
			fuelPumpEng1: {address: 0x3B98, type: 'uint', size: 4, toggleValues: [1, 0]},
			gearHandle: {address: 0x0BE8, type: 'uint', size: 4, toggleValues: [0, 16383]},
			gearLeft: {address: 0x0BF4, type: 'uint', size: 4},
			gearNose: {address: 0x0BEC, type: 'uint', size: 4},
			gearRight: {address: 0x0BF0, type: 'uint', size: 4},
			lightsBeacon: {address: 0x0D0C, type: 'bits', size: 2, bit: 1},
			lightsCabin: {address: 0x0D0C, type: 'bits', size: 2, bit: 9},
			lightsInstruments: {address: 0x0D0C, type: 'bits', size: 2, bit: 5},
			lightsLanding: {address: 0x0D0C, type: 'bits', size: 2, bit: 2},
			lightsLogo: {address: 0x0D0C, type: 'bits', size: 2, bit: 8},
			lightsNav: {address: 0x0D0C, type: 'bits', size: 2, bit: 0},
			lightsRecognition: {address: 0x0D0C, type: 'bits', size: 2, bit: 6},
			lightsStrobe: {address: 0x0D0C, type: 'bits', size: 2, bit: 4},
			lightsTaxi: {address: 0x0D0C, type: 'bits', size: 2, bit: 3},
			lightsWing: {address: 0x0D0C, type: 'bits', size: 2, bit: 7},
			starterSwitchEngine1Prop: {address: 0x0892, type: 'uint', size: 2, upDownSelector: true, validValues: [0, 1, 2, 3, 4]},
			starterSwitchEngine1JetTurbo: {address: 0x0892, type: 'uint', size: 2, upDownSelector: true, validValues: [0, 1, 2]},
			parkingBrake: {address: 0x0BC8, type: 'uint', size: 2, toggleValues: [0, 32767]},
			pitotHeat: {address: 0x029C, type: 'uint', size: 1, toggleValues: [1, 0]},
			transponderState: {address: 0x0B46, type: 'uint', size: 1, upDownSelector: true, validValues: [0, 1, 2, 3, 4, 5]},
		}
	}

	/**
	 * Options for Lvars
	 *
	 * `toggleValues` and `validValues` should hold the raw values coming from FSUIPC
	 *
	 * @return {object}
	 */
	static lVarOptions() {
		return {
			PFD_CDI_Source: {toggleValues: [3, 1]},
			AS1000_MFD_Brightness: {toggleValues: [2, 7]},  //TODO: should eventually be a knob up/down in a given range of numeric values
			//SAMPLE: starterSwitchEngine1Prop: {upDownSelector: true, validValues: [0, 1, 2, 3, 4]},
		}
	}

	/**
	 * Return all preset commands that can be executed
	 *
	 * This is a combination of our own set of commands and those from MobiFlight HubHop (https://hubhop.mobiflight.com/).
	 */
	static presetCommands() {
		var primary = {  // NOTE: these cannot be merged with map() because that is a definition of offsets and this is a definition of commands. They are often the same but multiple commands *could* use the same offsets - and we don't want to define the offsets multiple times
			autoSetAltimeter: {method: 'simControl', control: 'BAROMETRIC', parameter: 0},   // (automatically set barometric pressure according to sim) https://www.avsim.com/forums/topic/492606-fsuipc-set-baro-via-b/
		};

		return {...MobiFlightHubHopPresets, ...primary};
	}

	/**
	 * Generate the array with the offsets we want to monitor for a given aircraft
	 *
	 * @return {array}
	 */
	static makeOffsetsArrayForAircraft(offsets) {
		var array = [];
		var offsetMap = Fsuipc.map();

		var added = [];
		Object.keys(offsets).forEach(function(key) {
			var offsetProps = offsetMap[key];
			var offsetAddress = offsetProps.address;
			var effName = (offsetProps.type === 'bits' ? offsetAddress : key);

			if (added.indexOf(offsetAddress) == -1) {  //only if not already added - which can be the case for offsets using bits
				array.push({name: effName, address: offsetAddress, type: offsetProps.type, size: offsetProps.size});
				added.push(offsetAddress);
			}
		});

		return array;
	}

	static msfs20ControlNameToNumber(name) {
		Fsuipc.loadMsfs20Controls();

		return Fsuipc.simControls[name];
	}

	static loadMsfs20Controls() {
		if (Fsuipc.simControls === null) {
			var x = new XMLHttpRequest();
			x.open('GET', 'MsfsControlsList.txt', false);
			x.onreadystatechange = function() {
				if (x.readyState === 4) {
					switch (x.status) {
					case 200:
						var lines = x.responseText.trim().split("\n");
						Fsuipc.simControls = {};
						Object.values(lines).forEach(function(val) {
							var [controlNumber, controlName] = val.trim().split(/\s{2,}/);
							Fsuipc.simControls[controlName] = parseInt(controlNumber, 10);
						});

						break;
					default:
						throw 'Could not load flight sim Controls.';
						break;
					}
				}
			}
			x.send();
		}
	}
}
