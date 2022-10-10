import Common from './Common.js';
import MobiFlightHubHopPresets from './databases/MobiFlightHubHopPresets.js';
import FsuipcConversionOffset from './FsuipcConversionOffset.js';
import FsuipcConversionLVar from './FsuipcConversionLVar.js';

var UserFsuipcConversionLVar, UserFsuipcConversionOffset;

await import('./user-config/UserFsuipcConversionLVar.js?_='+ new Date().getTime())
	.then(module => UserFsuipcConversionLVar = module.default)
	.catch(() => console.log('UserFsuipcConversionLVar not found, skipped'));

await import('./user-config/UserFsuipcConversionOffset.js?_='+ new Date().getTime())
	.then(module => UserFsuipcConversionOffset = module.default)
	.catch(() => console.log('UserFsuipcConversionOffset not found, skipped'));


export default class Fsuipc {

	static simControls = null;

	constructor(aircraftId) {
		this.aircraftId = aircraftId;
	}

	/**
	 * Map names to offset addresses
	 *
	 * `toggleValues`, `validValues`, `min`, `max`, `step` must be based on the internal converted values, not the raw values coming from FSUIPC
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
			antiIceWing: {address: 0x337D, type: 'uint', size: 1, toggleValues: [1, 0]},
			antiIceEng1: {address: 0x08B2, type: 'uint', size: 2, toggleValues: [1, 0]},
			antiIceEng2: {address: 0x094A, type: 'uint', size: 2, toggleValues: [1, 0]},
			apuVoltage: {address: 0x0B5C, type: 'float', size: 4},
			autopilotAltitude: {address: 0x07D4, type: 'uint', size: 4, min: 0, max: 99999, step: 100},
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
			generatorEng1: {address: 0x3B78, type: 'uint', size: 4, toggleValues: [1, 0]},
			generatorEng2: {address: 0x3AB8, type: 'uint', size: 4, toggleValues: [1, 0]},
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
			seatBelts: {address: 0x341D, type: 'uint', size: 1, toggleValues: [1, 0]},
			spoilersArm: {address: 0x0BD0, type: 'uint', size: 4, toggleValues: [0, 4800]},
			starterSwitchEngine1Prop: {address: 0x0892, type: 'uint', size: 2, validValues: [0, 1, 2, 3, 4]},
			starterSwitchEngine1JetTurbo: {address: 0x0892, type: 'uint', size: 2, validValues: [0, 1, 2]},
			parkingBrake: {address: 0x0BC8, type: 'uint', size: 2, toggleValues: [0, 32767]},
			pitotHeat: {address: 0x029C, type: 'uint', size: 1, toggleValues: [1, 0]},
			transponderState: {address: 0x0B46, type: 'uint', size: 1, validValues: [0, 1, 2, 3, 4, 5]},
			yawDamper: {address: 0x0808, type: 'uint', size: 4, toggleValues: [1, 0]},
			//SAMPLE: transponderState: {address: 0x0B46, type: 'uint', size: 1, min: 0, max: 5, step: 1},
		}
	}

	/**
	 * Options for common LVars
	 *
	 * For the value, see documentation on `inputOptions` on the object being passed to eventHandlers.onPanelLoad().
	 *
	 * @return {object}
	 */
	static lVarOptions() {
		return {
			PFD_CDI_Source: {toggleValues: [3, 1]},
			AS1000_MFD_Brightness: {min: 0, max: 30},
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
	 * @param {object} aircraftOffsets : List of offsets from aircraft confiruation
	 * @param {object} offsetMap : List of all FSUIPC offsets that are available (combination of standard plus user's offsets)
	 * @return {array}
	 */
	static makeOffsetsArrayForAircraft(aircraftOffsets, offsetMap) {
		var array = [];

		var added = [];
		Object.keys(aircraftOffsets).forEach(function(key) {
			if (typeof offsetMap[key] === 'undefined') {
				Common.showError('The offset '+ key +' has not been defined. Skipping.');
				return true;
			}
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

	/**
	 * Convert the raw FSUIPC value to the internal value for this system
	 */
	static rawToInternalConversion(aircraftPanelId, method, refName, rawValue) {
		var Conversion, UserConversion;
		if (method === 'offset') {
			Conversion = new FsuipcConversionOffset(aircraftPanelId);
			if (UserFsuipcConversionOffset) {
				UserConversion = new UserFsuipcConversionOffset(aircraftPanelId);
			}
		} else if (method === 'lVar') {
			Conversion = new FsuipcConversionLVar(aircraftPanelId);
			if (UserFsuipcConversionLVar) {
				UserConversion = new UserFsuipcConversionLVar(aircraftPanelId);
			}
		} else {
			throw 'No conversion class defined for method "'+ method +'"';
		}

		if (typeof Conversion[refName] == 'object') {
			return Conversion[refName].from(rawValue);
		} else if (typeof UserConversion[refName] == 'object') {
			return UserConversion[refName].from(rawValue);
		} else {
			return rawValue;
		}
	}

	/**
	 * Convert the internal value for this system to the raw FSUIPC value
	 */
	static internalToRawConversion(aircraftPanelId, method, refName, internalValue) {
		var Conversion;
		if (method === 'offset') {
			Conversion = new FsuipcConversionOffset(aircraftPanelId);
		} else if (method === 'lVar') {
			Conversion = new FsuipcConversionLVar(aircraftPanelId);
		} else {
			throw 'No conversion class defined for method "'+ method +'"';
		}

		if (typeof Conversion[refName] == 'object') {
			return Conversion[refName].to(internalValue);
		} else {
			return internalValue;
		}
	}

	static msfs20ControlNameToNumber(name) {
		Fsuipc.loadMsfs20Controls();

		if (typeof Fsuipc.simControls[name] === 'undefined') {
			console.error('Sim control '+ name +' not found');
		}

		return Fsuipc.simControls[name];
	}

	static loadMsfs20Controls() {
		if (Fsuipc.simControls === null) {
			var x = new XMLHttpRequest();
			x.open('GET', 'databases/MsfsControlsList.txt', false);
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
