/**
 * Common methods used various places
 */
export default class Common {

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

	static objectToCss(obj) {
		return Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';');
	}

}
