<template>

	<div style="height: 35px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>
			<Button label="MASTER WARNING" method="simControl" refName="MASTER_WARNING_ACKNOWLEDGE" setValue="0" :eventHandlers="eventHandlers" />
			<Button label="MASTER CAUTION" method="simControl" refName="MASTER_CAUTION_ACKNOWLEDGE" setValue="0" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

	<div style="height: 50px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>
			<Toggleable label="YD" method="offset" refName="yawDamper" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		</td>
	</tr>
	</table>

	<div style="height: 35px"></div>

	<table align="left" class="std-spacing">
	<tr>
		<td style="padding-left: 100px">
			<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

	<div style="height: 100px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>

			<Toggleable label="LANDING" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="ICE" method="offset" refName="lightsWing" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false, classes: 'INOPERABLE'}" /><!-- ONLY TURNING IT ON WORKS CURRENTLY -->
			<Toggleable label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="RECOG" method="offset" refName="lightsRecognition" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		</td>
		<td>
			<SectionDivider />
		</td>
		<td>
			<Toggleable label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	<tr>
		<td>

<!--
			HAVEN'T FOUND TRIGGER FOR THE "RIGHT" PITOT SO SKIP IT ALLTOGETHER
			<Toggleable label="PITOT LEFT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
-->

		</td>
	</tr>
	</table>

	<div style="height: 100px"></div>

	<table align="right" class="std-spacing" style="margin-right: 10px">
	<tr>
		<td>

			<Toggleable label="PARK BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td>


		</td>
	</tr>
	</table>

	<table align="center">
	<tr>
		<td class="std-spacing" style="text-align: center">

			<Indicator label="Trim" method="offset" refName="trim" :dataStore="dataStore" :options="{classes: 'INOPERABLE'}" />
			<Indicator label="Flaps" method="offset" refName="flapsPositionLeft" :dataStore="dataStore" />

		</td>
	</tr>
	</table>

	<div style="height: 20px"></div>

	<table align="right" class="std-spacing" style="margin-right: 10px">
	<tr>
		<td>
			<Toggleable label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
		<td>
			<Button label="AUTO BARO" method="presetCommand" refName="autoSetAltimeter" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Toggleable from '../../../../instruments/generic/Toggleable.vue'; components.Toggleable = Toggleable;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;
import KnobTouchDrag from '../../../../instruments/generic/KnobTouchDrag.vue'; components.KnobTouchDrag = KnobTouchDrag;
import Indicator from '../../../../instruments/generic/Indicator.vue'; components.Indicator = Indicator;
import SectionDivider from '../../../../instruments/layout/SectionDivider.vue'; components.SectionDivider = SectionDivider;

export default {
	components,
	props: ['dataStore', 'eventHandlers'],
	setup(props) {
		/**
		 * Add aircraft-specific functions here for formatting the shown values. Common formatting methods are available in FsuipcHtml
		 */
		function flapsHtml(value) {
			if (value < 10) {
				return '<span class="cdarkgray">UP</span>';
			} else if (value < 8200) {
				return 'APPR';  //= 8192
			} else {
				return 'DOWN';  //= 16383
			}
		}

		props.eventHandlers.aircraftInited({
			/**
			 * Add all the values that are being displayed for this aircraft
			 *
			 * Key is the name from map() in Fsuipc.js, value is a function that will format and return HTML for displaying this value on the screen. The value can also be a string in which case it refers to a method in FsuipcHtml.
			 */
			offset: {
				flapsPositionLeft: flapsHtml,
				lightsStrobe: 'brightOnValue',
				lightsBeacon: 'brightOnValue',
				lightsNav: 'brightOnValue',
				lightsTaxi: 'brightOnValue',
				lightsLanding: 'brightOnValue',
				lightsRecognition: 'brightOnValue',
				lightsCabin: 'brightOnValue',
				parkingBrake: 'brightOnValue',
				pitotHeat: 'brightOffValue',
				transponderState: 'transponderState',
				yawDamper: 'brightOnValue',
			},
		});
	},
}
</script>

<style>
/* nothing yet */
</style>
