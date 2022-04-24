<!--

Complete API:
	https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/a32nx_api/

-->

<template>
	<table align="center" class="std-spacing">
	<tr>
		<!-- OVERHEAD -->
		<td style="padding: 0 10px 0 10px">

			<!--
			DOESN'T CURRENTLY WORK
			<Toggleable label="10" method="lVar" refName="A320_Neo_MFD_Range" lvarValue="0" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="20" method="lVar" refName="A320_Neo_MFD_Range" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="FUEL" method="hVar" refName="A320_Neo_EICAS_2_ECAM_CHANGE_PAGE_FUEL" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="ENG" method="hVar" refName="A320_Neo_EICAS_2_ECAM_CHANGE_PAGE_ENG" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			-->

			<div class="section">Elec</div>
			<Toggleable label="BAT" method="offset" refName="batteryMaster" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<div>&nbsp;</div>

			<Toggleable label="GEN 1" method="offset" refName="genEng1" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="APU GEN" method="offset" refName="genApu" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="GEN 2" method="offset" refName="genEng2" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<div style="height: 250px"></div>

			<Toggleable label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="WING" method="offset" refName="lightsWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<div style="height: 15px"></div>

			<Toggleable label="LANDING LTS" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td style="padding: 0 10px 0 10px">
			<div class="section">Fuel</div>

			<!-- TODO: some of these are to be Toggleable instead of Indicator -->

			<Indicator label="L BOOST<br/>PUMP" method="offset" refName="fuelPump1" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Indicator label="R BOOST<br/>PUMP" method="offset" refName="fuelPump2" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			<br>
			<Indicator label="XFLOW" method="offset" refName="fuelXfeed" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			<div class="section">BLEED</div>
			<Indicator label="SOURCE" method="offset" refName="bleedSrc" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			<div style="height: 15px"></div>

			<Indicator label="APU" method="offset" refName="apuSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<br>
			<Indicator label="APU RPM" method="offset" refName="apuRpm" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Indicator label="APU VOLTAGE" method="offset" refName="apuVoltage" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			<div style="height: 15px"></div>

			<Indicator label="ENG L START" method="offset" refName="eng1StarterSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Indicator label="ENG R START" method="offset" refName="eng2StarterSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<SectionDivider />
			<Indicator label="IGNITION" method="offset" refName="ign" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			<div class="section">Hyd</div>
			<Indicator label="ENG 1" method="offset" refName="hydPumpEng1" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Indicator label="ENG 2" method="offset" refName="hydPumpEng2" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

		</td>
		<td style="padding: 0 10px 0 10px">

			<div style="height: 190px"></div>

			<div class="section">Anti-Ice</div>

			<Toggleable label="WING" method="offset" refName="antiIceWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="ENG 1" method="offset" refName="antiIceEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="ENG 2" method="offset" refName="antiIceEng2" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<div style="height: 137px"></div>

			<Toggleable label="SEAT BELT" method="offset" refName="seatBelts" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<div style="height: 30px"></div>

	<!-- MCP -->
	<div style="text-align: center">

		<Annunciator label="APU VOLTAGE" method="offset" refName="apuVoltage" :dataStore="dataStore" />
		<Annunciator label="FD" method="offset" refName="mcpFDSw" :dataStore="dataStore" />
		<Annunciator label="A/P" method="offset" refName="mcpAPAnnun" :dataStore="dataStore" />
		<Annunciator label="SPEED" method="offset" refName="mcpSpdAnnun" :dataStore="dataStore" />
		<Annunciator label="N1" method="offset" refName="mcpN1Annun" :dataStore="dataStore" />
		<Annunciator label="APPR" method="offset" refName="mcpAppAnnun" :dataStore="dataStore" />
		<Annunciator label="HDG" method="offset" refName="mcpHdgAnnun" :dataStore="dataStore" />
		<Annunciator label="NAV" method="offset" refName="mcpNav1Annun" :dataStore="dataStore" />
		<Annunciator label="ALT" method="offset" refName="mcpAltAnnun" :dataStore="dataStore" />

	</div>

	<div style="height: 30px"></div>

	<!-- PEDESTAL and other -->
	<table align="center" class="std-spacing" style="width: 100%">
	<tr>
		<td></td>
		<td>
			<Toggleable label="Spoilers" method="offset" refName="spoilersArm" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td style="width: 35%; text-align: left">

			<Toggleable label="NAV/GPS" method="offset" refName="navGpsSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td>

			<Indicator label="Speed Break" method="offset" refName="spdBreak" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Toggleable label="Gear" method="offset" refName="gearHandle" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<br>
			<Toggleable label="Parking Break" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Indicator label="Flaps" method="offset" refName="flaps" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<br>
			<Indicator label="ENG 1 FUEL" method="offset" refName="eng1CutoffSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<Indicator label="ENG 2 FUEL" method="offset" refName="eng2CutoffSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

		</td>
		<td style="padding-left: 100px">

			<Indicator label="Trim" method="offset" refName="trim" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
			<br>
			<Indicator label="-SPACER-" :options="{invisible: true}" :dataStore="dataStore" />
			<br>
			<Indicator label="XPNDR" method="offset" refName="sqwkCode" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

		</td>
		<td style="width: 35%">
		</td>
	</tr>
	</table>
</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Toggleable from '../../../../instruments/generic/Toggleable.vue'; components.Toggleable = Toggleable;
import Indicator from '../../../../instruments/generic/Indicator.vue'; components.Indicator = Indicator;
import Annunciator from '../../../../instruments/generic/Annunciator.vue'; components.Annunciator = Annunciator;
import SectionDivider from '../../../../instruments/layout/SectionDivider.vue'; components.SectionDivider = SectionDivider;

export default {
	components,
	props: ['dataStore', 'eventHandlers'],
	setup(props) {
		/**
		 * Add aircraft-specific functions here for formatting the shown values. Common formatting methods are available in FsuipcHtml
		 */
		function flapsHtml(value) {
			if (value == 0) {
				return '<span class="cdarkgray">UP</span>';
			} else if (value < 8300) {
				return 'TAKEOFF';
			} else {
				return 'DOWN';
			}
		}

		props.eventHandlers.aircraftInited({
			/**
			 * Add all the values that are being displayed for this aircraft
			 *
			 * Key is the name from map() in Fsuipc.js, value is a function that will format and return HTML for displaying this value on the screen. The value can also be a string in which case it refers to a method in FsuipcHtml.
			 */
			offset: {
				batteryMaster: 'brightOffValue',
				antiIceWing: 'brightOnValue',
				antiIceEng1: 'brightOnValue',
				antiIceEng2: 'brightOnValue',
				avionicsMaster: 'brightOffValue',
				alternator1Master: 'brightOffValue',
				fuelPumpEng1: 'brightOnValue',
				gearHandle: 'gearHandle',
				gearNose: 'gearPosition',
				gearRight: 'gearPosition',
				gearLeft: 'gearPosition',
				flapsPositionLeft: flapsHtml,
				lightsStrobe: 'brightOnValue',
				lightsBeacon: 'brightOnValue',
				lightsNav: 'brightOnValue',
				lightsTaxi: 'brightOnValue',
				lightsLanding: 'brightOnValue',
				// lightsLogo: 'brightOnValue',  //merged with nav light in A320
				lightsWing: 'brightOnValue',
				lightsInstruments: 'brightOnValue',
				lightsCabin: 'brightOnValue',
				cowlFlapEngine1: 'cowlFlapPosition',
				parkingBrake: 'brightOnValue',
				seatBelts: 'brightOnValue',
				spoilersArm: 'spoilerPosition',
			},
		});
	},
}
</script>
