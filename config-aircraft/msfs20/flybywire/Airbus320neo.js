import FsuipcHtml from './../../../FsuipcHtml.js';

export default class Airbus320neoFBW {

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
			// lightsLogo: FsuipcHtml.brightOnValue,  //merged with nav light in A320
			lightsWing: FsuipcHtml.brightOnValue,
			lightsInstruments: FsuipcHtml.brightOnValue,
			lightsCabin: FsuipcHtml.brightOnValue,
			cowlFlapEngine1: FsuipcHtml.cowlFlapPosition,
			parkingBrake: FsuipcHtml.brightOnValue,
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

/*
// THE OLD METHOD:
function setIndicator(theName, theValue, blankOut) {
	var html = '&nbsp;';
	var addClass, removeClass;

	switch (theName) {
	case 'batt':
	case 'avionics':
	case 'genEng1':
	case 'genEng2':
	case 'hydPumpEng1':
	case 'hydPumpEng2':
		//bright Off value
		if (theValue == 0) {
			html = 'OFF';
		} else {
			html = '<span class="cdarkgray">ON</span>';
		}
		break;
	case 'fuelPump1':
	case 'fuelPump2':
	case 'ltsLandFix':
	case 'ltsTaxi':
	case 'ltsNav':
	case 'ltsStrobe':
	case 'ltsBeacon':
	case 'ltsWing':
	case 'ltsLogo':
	case 'ltsRecog':
	case 'seatbelt':
	//CAN'T USE THE VALUE FROM THE JSON FEED. case 'apuSw':
	case 'antiIceEng1':
	case 'antiIceEng2':
	case 'antiIceWing':
	case 'genApu':
		//bright On value
		if (theValue == 0) {
			html = '<span class="cdarkgray">OFF</span>';
		} else {
			html = 'ON';
		}
		break;
	case 'flaps':
		if (theValue == 0) {
			html = '<span class="cdarkgray">0</span>';
		} else {
			html = ''+ theValue;
		}
		break;
	case 'apuSw':
		html = 'NONE';
		break;
	case 'apuRpm':
		//NOTE: This is probably not fully correct!!
		var perc = Math.round((theValue-11200)/1120403300*1000)/10;


		//Work-around for getting the apuSw status (have to look at the APU RPMs instead to see if they are going up or down)
		if (perc == 100 || (typeof window._last_apuRpm != 'undefined' && perc > window._last_apuRpm)) {
			$('#apuSw .val').html('ON');
		} else if (perc == 0 || (typeof window._last_apuRpm != 'undefined' && perc < window._last_apuRpm)) {
			$('#apuSw .val').html('<span class="cdarkgray">OFF</span>');
		}
		window._last_apuRpm = perc;


		if (perc.toString().match(/\./) === null) {
			perc = perc.toString() +'.0';
		}
		if (perc == '0.0') {
			html = '<span class="cdarkgray">0%</span>';
		} else {
			html = ''+ perc +'%';
		}
		break;
	case 'apuVoltage':
		//NOTE: This is probably not correct!!
		if (theValue == 0) {
			html = '<span class="cdarkgray">0 kVA</span>';
		} else {
			html = ''+ Math.floor(theValue / (1106247575/30)) +' kVA';
		}
		break;
	case 'bleedSrc':
		if (theValue == 0) {
			html = '<span class="cdarkgray">AUTO</span>';
		} else if (theValue == 1) {
			html = 'CLSD';
		} else if (theValue == 2) {
			html = 'APU';
		} else if (theValue == 3) {
			html = '<span class="cdarkgray">ENGS</span>';
		}
		break;
	case 'eng1StarterSw':
	case 'eng2StarterSw':
		if (theValue == 1) {
			html = 'START';
		} else {
			html = '<span class="cdarkgray">OFF</span>';
		}
		break;
	case 'eng1CutoffSw':
	case 'eng2CutoffSw':
		if (theValue == 0) {
			html = '<span class="cred">CUTOFF</span>';
		} else {
			html = '<span class="cdarkgray">OPEN</span>';
		}
		break;
	case 'fuelXfeed':
		if (theValue == 1) {
			html = '<span class="cdarkgray">CLOSED</span>';
		} else if (theValue == 2)  {
			html = '<span class="corange">L</span>';
		} else if (theValue == 3)  {
			html = '<span class="corange">R</span>';
		}
		break;
	case 'gearLever':
		if (theValue == 0) {
			html = '<span class="cmediumgray">Up</span>';
		} else {
			//theValue is 2
			html = '<span class="cgreen">Down</span>';
		}
		break;
	case 'ign':
		if (theValue == 1) {
			html = 'CONT';
		} else {
			html = '<span class="cdarkgray">OFF</span>';
		}
		break;
	case 'navGpsSw':
		if (theValue == 0) {
			html = '<span class="cmediumgray">NAV</span>';
		} else {
			html = '<span class="cmediumgray">GPS</span>';
		}
		break;
	case 'parkBreak':
		html = (theValue == 1 ? '<span class="corange">Set</span>' : '<span class="cdarkgray">Free</span>');
		break;
	case 'spdBreak':
		if (theValue == 0) {
			html = '<span class="cdarkgray">Down</span>';
		} else if (theValue == 'something') {  //can we get this to work?
			html = 'Armed';
		} else {
			html = '<span class="cyellow">'+ Math.round(theValue / 16384 *100) +'%</span>';
		}
		break;
	case 'pitotHeat':
		if (theValue == 0) {
			html = '<span class="cred">OFF</span>';
		} else {
			html = '<span class="cdarkgray">ON</span>';
		}
		break;
	case 'trim':
	case 'sqwkCode':
		html = '<span class="cmediumgray">'+ theValue +'</span>';
		break;
	case 'mcpVSAnnun':
	case 'fuelPump3':
	case 'fuelPump4':
		//not used
		break;
	default:
		if (blankOut == true) {
			theValue = 0;
		}
		html = 'NONE';
		// ANNUNCIATORS
		if ($.inArray(theName, ['mcpFDSw', 'mcpN1Annun', 'mcpSpdAnnun', 'mcpHdgAnnun', 'mcpNav1Annun', 'mcpAppAnnun', 'mcpAltAnnun', 'mcpVSAnnun', 'mcpAPAnnun', 'yawDamp']) > -1) {
			if (theValue == 1) {
				addClass = 'cgreen';
			} else {
				removeClass = 'cgreen';
			}
		} else if (theName.slice(-5) == 'Annun') {
			if (theValue == 1) {
				addClass = 'annun-orange';
			} else {
				removeClass = 'annun-orange';
			}
		} else {
			html = '<span class="cblue">'+ theValue +'</span>';
			console.log('Not yet defined: '+ theName);
		}
	}
	if (html != 'NONE') {
		if (blankOut == true) {
			$('#'+ theName +' .val').html('&nbsp;');
		} else {
			$('#'+ theName +' .val').html(html);
		}
	}
	if (addClass) {
		if ($('#'+ theName).hasClass(addClass) == false) {
			$('#'+ theName).addClass(addClass);
		}
	} else if (removeClass) {
		$('#'+ theName).removeClass(removeClass);
	}
}
*/
