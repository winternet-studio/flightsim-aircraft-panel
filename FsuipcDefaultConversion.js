/**
 * Default offset value conversion
 */
export default class FsuipcDefaultConversion {

	constructor(options) {
		if (!isNaN(options?.decimals)) {
			this.decimals = options.decimals;
		}
	}

	from(value) {
		if (!isNaN(this.decimals)) {
			return this.roundNumber(value, this.decimals);
		} else {
			return value;
		}
	}

	to(value) {
		return value;
	}

	roundNumber(number, decimals) {
		if (decimals == 0) {
			return Math.round(number);
		} else {
			var mult = 10 ** decimals;
			return Math.round(number * mult) / mult;
		}
	}

}
