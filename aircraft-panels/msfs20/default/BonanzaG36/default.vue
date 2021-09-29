<template>
	<table align="center">
	<tr>
		<td style="padding: 20px">

			<!-- PDF -->
			<Button label="SOFT 1" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_1" :eventHandlers="eventHandlers" />
			<Button label="SOFT 2" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_2" :eventHandlers="eventHandlers" />
			<Button label="SOFT 3" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_3" :eventHandlers="eventHandlers" />
			<Button label="SOFT 4" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_4" :eventHandlers="eventHandlers" />
			<Button label="SOFT 5" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_5" :eventHandlers="eventHandlers" />
			<Button label="SOFT 6" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_6" :eventHandlers="eventHandlers" />
			<Button label="SOFT 7" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_7" :eventHandlers="eventHandlers" />
			<Button label="SOFT 8" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_8" :eventHandlers="eventHandlers" />
			<Button label="SOFT 9" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_9" :eventHandlers="eventHandlers" />
			<Button label="SOFT 10" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_10" :eventHandlers="eventHandlers" />
			<Button label="SOFT 11" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_11" :eventHandlers="eventHandlers" />
			<Button label="SOFT 12" method="calcCode" functionRef="AS1000_PFD_SOFTKEYS_12" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	<tr>
		<td style="padding: 20px">

			<!-- MFD -->
			<Button label="FLC" method="calcCode" functionRef="AS1000_MFD_FLC_Push" :eventHandlers="eventHandlers" />
			<Button label="DIR" method="hVar" functionRef="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" />
			<Button label="MENU" method="hVar" functionRef="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" />
			<Button label="FPL" method="hVar" functionRef="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" />
			<Button label="PROC" method="hVar" functionRef="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" />
			<Button label="CLR" method="hVar" functionRef="AS1000_MFD_CLR" :eventHandlers="eventHandlers" />
			<Button label="CLR Long" method="hVar" functionRef="AS1000_MFD_CLR_Long" :eventHandlers="eventHandlers" />
			<Button label="ENT" method="hVar" functionRef="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" />
			<Button label="Zoom In" method="hVar" functionRef="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" />
			<Button label="Zoom Out" method="hVar" functionRef="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" />
			<!-- <Button label="SOFT 3" method="calcCode" functionRef="AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" /> -->
			<!-- <Button label="SOFT 11" method="calcCode" functionRef="AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" /> -->

		</td>
	</tr>
	</table>

	<Toggleable label="NAV/GPS" method="offset" functionRef="navGpsSw" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />

	<div style="width: 20px; display: inline-block"></div>

	<Toggleable label="GEAR" method="offset" functionRef="gearHandle" :dataStore="dataStore" :eventHandlers="eventHandlers" />

	<Toggleable label="DOME LTS" method="offset" functionRef="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />

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
			<Toggleable label="FUEL PUMP" method="offset" functionRef="fuelPumpEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<SectionDivider />

			<Toggleable label="STROBE" method="offset" functionRef="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="BEACON" method="offset" functionRef="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="NAV" method="offset" functionRef="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<SectionDivider />

			<Toggleable label="PANEL" method="offset" functionRef="lightsInstruments" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="TAXI" method="offset" functionRef="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="LANDING" method="offset" functionRef="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="PROBE HEAT" method="offset" functionRef="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" />

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

	<table align="center">
	<tr>
		<td style="padding: 0 10px 0 10px">

			<Toggleable label="PARK BRAKE" method="offset" functionRef="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Indicator label="COWL FLAPS" method="offset" functionRef="cowlFlapEngine1" :dataStore="dataStore" />

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
				lightsInstruments: 'brightOnValue',
				lightsCabin: 'brightOnValue',
				cowlFlapEngine1: 'cowlFlapPosition',
				parkingBrake: 'brightOnValue',
				pitotHeat: 'brightOffValue',
				starterSwitchEngine1Prop: 'starterSwitchEngine1Prop',
				transponderState: 'transponderState',
			},
		});
	},
}
</script>
