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
			return '<span class="cdarkgray">ON</span>';
		}
	}

	static brightOnValue(value) {
		if (value == 0) {
			return '<span class="cdarkgray">OFF</span>';
		} else {
			return 'ON';
		}
	}

	static gearHandle(value) {
		if (value == 0) {
			return '<span class="cmediumgray">Up</span>';
		} else {
			return '<span class="cgreen">Down</span>';
		}
	}

	static gearPosition(value) {
		if (value == 0) {
			return '';  //up
		} else if (value == 16383) {
			return '<span class="cgreen">GREEN</span>';
		} else {
			return '<span class="cyellow">TRANSITION</span>';
		}
	}

	static cowlFlapPosition(value) {
		if (value == 0) {
			return '<span class="cdarkgray">CLOSED</span>';
		} else {
			return value +' %';
		}
	}

	static apuVoltage(value) {
		return '<span class="cmediumgray" style="font-size: 70%">'+ value +' kVA</span>';
	}

	static apuRpm(perc) {
		return '<span class="cmediumgray" style="font-size: 70%">'+ perc +'%</span>';
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
