/**
 * Common methods used various places
 */
export default class Common {

	static getNextToggleValue(toggleValues, currentValue) {
		// find the new value
		var currIndx = toggleValues.indexOf(currentValue);
		if (currIndx < toggleValues.length - 1 && currIndx !== -1) {
			return toggleValues[currIndx + 1];
		} else {
			return toggleValues[0];
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
