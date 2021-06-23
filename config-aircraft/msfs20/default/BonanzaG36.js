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

/*
// THE OLD METHOD:
function setIndicator(theName, theValue, blankOut) {
	var html = '&nbsp;';
	var addClass, removeClass;

	switch (theName) {
	case 'eng1ManifPress':
		html = '<span class="cmediumgray">'+ Math.floor(theValue*10)/10 +'</span>';
		break;
	case 'eng1OilPress':
		html = '<span class="cmediumgray">'+ theValue +' psi</span>';
		break;
	case 'eng1Egt':
	case 'eng1OilTemp':
	case 'OAT':
		html = '<span class="cmediumgray">'+ Math.round(theValue) +'°C</span>';
		break;
	case 'eng1StarterSw':
	case 'eng2StarterSw':
		if (theValue == 0) {
			html = 'OFF';
		} else if (theValue == 1) {
			html = 'RIGHT';
		} else if (theValue == 2) {
			html = 'LEFT';
		} else if (theValue == 3) {
			html = '<span class="cdarkgray">BOTH</span>';
		} else {
			html = 'START';
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
	case 'fuelTank1Level':
	case 'fuelTank2Level':
	case 'eng1Throttle':
	case 'eng1Prop':
	case 'eng1Mixture':
		html = '<span class="cmediumgray">'+ theValue +' %</span>';
		break;
	case 'fuelSel':
		if (theValue == 0) {
			html = '<span class="cred">OFF</span>';
		} else if (theValue == 1) {
			html = '<span class="cmediumgray">BOTH</span>';
		} else if (theValue == 2) {
			html = '<span class="cmediumgray">LEFT</span>';
		} else if (theValue == 3) {
			html = '<span class="cmediumgray">RIGHT</span>';
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
	case 'elecAmps':
	case 'eng1Rpm':
	case 'trim':
	case 'sqwkCode':
		html = '<span class="cmediumgray">'+ theValue +'</span>';
		break;
	case 'mcpVSAnnun':
	case 'fuelPump3':
	case 'fuelPump4':
	case 'prop1DeIce':
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
