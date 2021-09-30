/**
 * Common methods used various places
 */
export default class Common {

	static getNextToggleValue(toggleValues, currentValue) {
		var currIndx = toggleValues.indexOf(currentValue);
		if (currIndx < toggleValues.length - 1 && currIndx !== -1) {
			return toggleValues[currIndx + 1];
		} else {
			return toggleValues[0];
		}
	}

	/**
	 * @param {array} validValues : Array of valid values
	 * @param {string} direction : `up` or `down`
	 */
	static getNextUpDownValue(validValues, currentValue, direction) {
		var currIndx = validValues.indexOf(currentValue);
		if (direction === 'up') {
			if (currIndx < validValues.length - 1) {
				return validValues[currIndx + 1];
			} else {
				return null;
			}
		} else if (direction === 'down') {
			if (currIndx > 0) {
				return validValues[currIndx - 1];
			} else {
				return null;
			}
		}
	}

	/**
	 * @param {object} rangeSettings : Object with keys `min`, `max`, and `step`
	 * @param {string} direction : `up` or `down`
	 */
	static getNextRangeValue(rangeSettings, currentValue, direction, customStep) {
		var effStep;
		if (customStep) {
			effStep = customStep;
		} else if (rangeSettings.step) {
			effStep = rangeSettings.step;
		} else {
			effStep = 1;
		}

		if (direction === 'up' && currentValue + effStep <= rangeSettings.max) {
			return currentValue + effStep;
		} else if (direction === 'down' && currentValue - effStep >= rangeSettings.min) {
			return currentValue - effStep;
		} else {
			return null;
		}
	}

	static objectToCss(obj) {
		return Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';');
	}

	/**
	 * @param {string} message
	 */
	static showError(message, options) {
		if (typeof options === 'undefined') options = {};

		var elem = document.getElementById('errorMessage');
		elem.innerText = message;
		if (options.timeout) {
			setTimeout(() => {
				if (elem.innerText == message) {
					elem.innerText = '';
				}
			}, options.timeout);
		}
	}

}
