export default class FsuipcHtml {

	/**
	 * Pass value straight through
	 */
	static pass(value) {
		return value;
	}

	static brightOffValue(value) {
		if (value == 0) {
			return 'OFF';
		} else {
			return '<span class="c-darkgray">ON</span>';
		}
	}

	static brightOnValue(value) {
		if (value == 0) {
			return '<span class="c-darkgray">OFF</span>';
		} else {
			return 'ON';
		}
	}

	static gearHandle(value) {
		if (value == 0) {
			return '<span class="c-mediumgray">Up</span>';
		} else {
			return '<span class="c-green">Down</span>';
		}
	}

	static gearPosition(value) {
		if (value == 0) {
			return '';  //up
		} else if (value == 16383) {
			return '<span class="c-green">GREEN</span>';
		} else {
			return '<span class="c-yellow">TRANSITION</span>';
		}
	}

	static spoilerPosition(value) {  //see FSUIPC offset 0BD0
		if (value == 0) {
			return '<span class="c-darkgray">STOWED</span>';
		} else if (value == 4800) {
			return '<span class="c-green">ARMED</span>';
		} else {
			if (value >= 5620 ) {
				var base = 5620;
				var perc = Math.round((value - base) / (16383 - base) * 93) + 7;
				return '<span class="c-orange">'+ perc +'%</span>';  //extended/deployed
			} else {
				return '<span class="c-orange">EXTDD</span>';  //extended/deployed
			}
		}
	}

	static cowlFlapPosition(value) {
		if (value == 0) {
			return '<span class="c-darkgray">CLOSED</span>';
		} else {
			return Math.round(value * 100) +' %';
		}
	}

	static apuVoltage(value) {
		return '<span class="c-mediumgray" style="font-size: 70%">'+ value +' kVA</span>';
	}

	static apuRpm(perc) {
		return '<span class="c-mediumgray" style="font-size: 70%">'+ perc +'%</span>';
	}

	static starterSwitchEngine1Prop(value) {
		if (value == 0) {
			return 'OFF';
		} else if (value == 1) {
			return 'RIGHT';
		} else if (value == 2) {
			return 'LEFT';
		} else if (value == 3) {
			return 'BOTH';
		} else if (value == 4) {
			return 'START';
		} else {
			return '?';
		}
	}

	static starterSwitchEngine1JetTurbo(value) {
		if (value == 0) {
			return 'OFF';
		} else if (value == 1) {
			return 'START';
		} else if (value == 2) {
			return 'GEN/ALT';
		} else {
			return '?';
		}
	}

	static transponderState(value) {
		if (value == 0) {
			return 'OFF';
		} else if (value == 1) {
			return 'STBY';
		} else if (value == 2) {
			return 'TEST';
		} else if (value == 3) {
			return 'ON';
		} else if (value == 4) {
			return 'ALT';
		} else if (value == 5) {
			return 'GROUND';
		} else {
			return '?';
		}
	}

}
