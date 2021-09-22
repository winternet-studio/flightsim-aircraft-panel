import FsuipcHtml from './../../../FsuipcHtml.js';

export default class BonanzaG36 {

	static getOffsets() {
		return {  //key is the name from map() in Fsuipc.js, value is a function that will format and return HTML for displaying this value on the screen
			batteryMaster: FsuipcHtml.brightOffValue,
			avionicsMaster: FsuipcHtml.brightOffValue,
			alternator1Master: FsuipcHtml.brightOffValue,
			fuelPumpEng1: FsuipcHtml.brightOnValue,
			gearHandle: FsuipcHtml.gearHandle,
			gearNose: FsuipcHtml.gearPosition,
			gearRight: FsuipcHtml.gearPosition,
			gearLeft: FsuipcHtml.gearPosition,
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
			pitotHeat: FsuipcHtml.brightOffValue,
			starterSwitchEngine1Prop: FsuipcHtml.starterSwitchEngine1Prop,
			transponderState: FsuipcHtml.transponderState,
		};
	}

	static flapsHtml(value) {
		if (value == 0) {
			return '<span class="cdarkgray">UP</span>';
		} else if (value < 8300) {
			return 'TAKEOFF';
		} else {
			return 'DOWN';
		}
	}

}
