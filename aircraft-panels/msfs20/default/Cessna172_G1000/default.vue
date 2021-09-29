<template>

	<div style="height: 35px"></div>

	<div class="displays-container" style="position: relative">
		<div class="pfd-display">

			<div class="displays display-width pfd-horiz-position">Place PFD here</div>

			<table class="display-width pfd-horiz-position" style="position: absolute; top: 510px">
			<tr>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
			</tr>
			</table>

		</div>
		<div class="mdf-display">

			<div class="displays display-width mfd-horiz-position">Place MFD here</div>

			<table class="display-width mfd-horiz-position" style="position: absolute; top: 510px">
			<tr>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
				<td><Button label="▲" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{style: {width: '50px', height: '25px', margin: '2px'}, labelStyle: {'font-size': '10px', opacity: 0.3}}" /></td>
			</tr>
			</table>

		</div>
	</div>

	<table align="center">
	<tr>
		<td style="padding: 20px">

			<!-- PFD -->

		</td>
	</tr>
	<tr>
		<td style="padding: 20px">

			<!-- MFD -->
			<Button label="FLC" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_FLC_Push" :eventHandlers="eventHandlers" />
			<Button label="DIR" method="hVar" functionRef="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" />
			<Button label="MENU" method="hVar" functionRef="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" />
			<Button label="FPL" method="hVar" functionRef="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" />
			<Button label="PROC" method="hVar" functionRef="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" />
			<Button label="CLR" method="hVar" functionRef="AS1000_MFD_CLR" :eventHandlers="eventHandlers" />
			<Button label="CLR Long" method="hVar" functionRef="AS1000_MFD_CLR_Long" :eventHandlers="eventHandlers" />
			<Button label="ENT" method="hVar" functionRef="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" />
			<Button label="Zoom In" method="hVar" functionRef="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" />
			<Button label="Zoom Out" method="hVar" functionRef="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" />
			<!-- <Button label="SOFT 3" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" /> -->
			<!-- <Button label="SOFT 11" method="presetCommand" functionRef="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" /> -->

		</td>
	</tr>
	</table>

	<div style="height: 20px"></div>

	<table align="center">
	<tr>
		<td style="padding: 30px">

			<KnobUpDown label="XPDR" method="offset" functionRef="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<div style="height: 10px"></div>

	<table align="center">
	<tr>
		<td style="padding: 30px">

			<Toggleable label="BAT MASTER" method="offset" functionRef="batteryMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="ALTERNATOR" method="offset" functionRef="alternator1Master" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="AVIONICS" method="offset" functionRef="avionicsMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{defectWrite: true}" />

			<SectionDivider />

			<Toggleable label="BEACON" method="offset" functionRef="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="LANDING" method="offset" functionRef="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="TAXI" method="offset" functionRef="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="NAV" method="offset" functionRef="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="STROBE" method="offset" functionRef="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

			<SectionDivider />

			<Toggleable label="PANEL" method="offset" functionRef="lightsInstruments" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="FUEL PUMP" method="offset" functionRef="fuelPumpEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="PROBE HEAT" method="offset" functionRef="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	</table>

	<table align="center">
	<tr>
		<td style="padding: 30px">

			<KnobUpDown label="MAGNETOS" method="offset" functionRef="starterSwitchEngine1Prop" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<div style="height: 40px"></div>

	<table align="center">
	<tr>
		<td style="padding: 0 10px 0 10px">

			<Toggleable label="PARK BRAKE" method="offset" functionRef="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<table align="center">
	<tr>
		<td>

			<Indicator label="Trim" method="offset" functionRef="trim" :dataStore="dataStore" :options="{classes: 'INOPERABLE'}" />
			<Indicator label="Flaps" method="offset" functionRef="flapsPositionLeft" :dataStore="dataStore" />

			<div style="height: 30px"></div>

			<Toggleable label="Fuel Selector" method="offset" functionRef="fuelSel" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
			<Button label="AUTO BARO" method="presetCommand" functionRef="autoSetAltimeter" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<Toggleable label="DOME LTS" method="offset" functionRef="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />

</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Toggleable from '../../../../instruments/generic/Toggleable.vue'; components.Toggleable = Toggleable;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;
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
			} else if (value < 5500) {
				return '10°';
			} else if (value < 11000) {
				return '20°';
			} else {
				return '30°';
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
				avionicsMaster: 'brightOffValue',
				alternator1Master: 'brightOffValue',
				fuelPumpEng1: 'brightOnValue',
				flapsPositionLeft: flapsHtml,
				lightsStrobe: 'brightOnValue',
				lightsBeacon: 'brightOnValue',
				lightsNav: 'brightOnValue',
				lightsTaxi: 'brightOnValue',
				lightsLanding: 'brightOnValue',
				lightsInstruments: 'brightOnValue',
				lightsCabin: 'brightOnValue',
				parkingBrake: 'brightOnValue',
				pitotHeat: 'brightOffValue',
				starterSwitchEngine1Prop: 'starterSwitchEngine1Prop',
				transponderState: 'transponderState',
			},
			lVar: {
				AS1000_MFD_Brightness: 'pass',
				ParkingBrake_Position: 'pass',
				PFD_CDI_Source: 'pass',  //TODO: make HTML formatting function
			}
		});
	},
}
</script>

<style>
.displays-container {
	height: 550px;
}
.display-width {
	width: 674px;  /* Aspect ratio of G1000 displays are 1.33 */
}
.displays {
	height: 506px;
	padding-top: 240px;
	border: 1px solid #23292d;
	color: #23292d;
	font-size: 2em;
	position: absolute;
	text-align: center;
}
.pfd-horiz-position {
	left: 150px;
}
.mfd-horiz-position {
	right: 150px;
}
</style>
