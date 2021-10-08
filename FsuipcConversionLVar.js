import FsuipcDefaultConversion from './FsuipcDefaultConversion.js';

/**
 * Convert FSUIPC LVar values to and from human readable format
 */
export default class FsuipcConversionLVar {

	constructor(aircraftPanelId) {
		this._aircraftPanelId = aircraftPanelId;

		this.AS1000_MFD_Brightness = new FsuipcDefaultConversion({decimals: 0});
	}

}
