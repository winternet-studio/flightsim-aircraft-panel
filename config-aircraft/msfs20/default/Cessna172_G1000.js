import FsuipcHtml from './../../../FsuipcHtml.js';

export default class Cessna172_G1000 {

	static getOffsets() {
		return {  //key is the name from map() in Fsuipc.js, value is a function that will format and return HTML for displaying this value on the screen
			batteryMaster: FsuipcHtml.brightOffValue,
			avionicsMaster: FsuipcHtml.brightOffValue,
			alternator1Master: FsuipcHtml.brightOffValue,
			fuelPumpEng1: FsuipcHtml.brightOnValue,
			flapsPositionLeft: this.flapsHtml,
			lightsStrobe: FsuipcHtml.brightOnValue,
			lightsBeacon: FsuipcHtml.brightOnValue,
			lightsNav: FsuipcHtml.brightOnValue,
			lightsTaxi: FsuipcHtml.brightOnValue,
			lightsLanding: FsuipcHtml.brightOnValue,
			lightsInstruments: FsuipcHtml.brightOnValue,
			lightsCabin: FsuipcHtml.brightOnValue,
			cowlFlapEngine1: FsuipcHtml.cowlFlapPosition,
			parkingBrake: FsuipcHtml.brightOnValue,
		};
	}

	static flapsHtml(value) {
		if (value < 10) {
			return '<span class="cdarkgray">UP</span>';
		} else if (value < 5500) {
			return '10°';
		} else if (value < 11000) {
			return '20°';
		} else {
			return '30°';
		}
	}

}
