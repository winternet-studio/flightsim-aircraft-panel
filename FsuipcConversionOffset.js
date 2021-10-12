import FsuipcDefaultConversion from './FsuipcDefaultConversion.js';

/**
 * Convert FSUIPC offset values to and from our internal value (more human friendly format)
 */
export default class FsuipcConversionOffset {

	constructor(aircraftPanelId) {
		this._aircraftPanelId = aircraftPanelId;

		this.gearLeft = new FsuipcDefaultConversion();

		this.aircraftAltitude = new FsuipcDefaultConversion();
		// this.aircraftAltitude.from = function(value) {
		// 	return value * 2;
		// };
		// this.aircraftAltitude.from = this.testConversion;

		this.apuVoltage = new FsuipcDefaultConversion();
		this.apuVoltage.from = function(value) {
			//NOTE: This is probably not correct!!
			return Math.floor(value / (1106247575/30));
		};

		this.apuRpm = new FsuipcDefaultConversion();
		this.apuRpm.from = function(value) {
			//NOTE: This is probably not correct!!
			var perc = Math.round((theValue-112)/11204033*1000)/10;
			if (perc.toString().match(/\./) === null) {
				perc = perc.toString() +'.0';
			}
			return perc;
		};

		this.autopilotAltitude = new FsuipcDefaultConversion();
		this.autopilotAltitude.from = function(value) {
			// raw value is: metres*65536
			return Math.round(value / 65536 * 3.28084);
		};
		this.autopilotAltitude.to = function(value) {
			return Math.round(value / 3.28084 * 65536);
		};

		// ADD THESE EVENTUALLY:
		// // Convert heading from FS units to degrees
		// var headingDegrees = data['heading'] * 360 / (65536 * 65536);
		// document.getElementById('headingTrue').innerText = headingDegrees.toFixed(0);
		// // Convert altitude metres to feet
		// var altitudeFeet = data['altitude'] / (65535 * 65535) * 3.28084;
		// document.getElementById('altitude').innerText = altitudeFeet.toFixed(0);
	}

	testConversion(value) {  //SAMPLE METHOD for reuse
		return value / 2;
	}

}
