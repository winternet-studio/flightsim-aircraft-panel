<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<div class="text-center generic-section">

		<!-- PFD -->
		<Button label="SOFT 1" method="calcCode" refName="AS1000_PFD_SOFTKEYS_1" :eventHandlers="eventHandlers" />
		<Button label="SOFT 2" method="calcCode" refName="AS1000_PFD_SOFTKEYS_2" :eventHandlers="eventHandlers" />
		<Button label="SOFT 3" method="calcCode" refName="AS1000_PFD_SOFTKEYS_3" :eventHandlers="eventHandlers" />
		<Button label="SOFT 4" method="calcCode" refName="AS1000_PFD_SOFTKEYS_4" :eventHandlers="eventHandlers" />
		<Button label="SOFT 5" method="calcCode" refName="AS1000_PFD_SOFTKEYS_5" :eventHandlers="eventHandlers" />
		<Button label="SOFT 6" method="calcCode" refName="AS1000_PFD_SOFTKEYS_6" :eventHandlers="eventHandlers" />
		<Button label="SOFT 7" method="calcCode" refName="AS1000_PFD_SOFTKEYS_7" :eventHandlers="eventHandlers" />
		<Button label="SOFT 8" method="calcCode" refName="AS1000_PFD_SOFTKEYS_8" :eventHandlers="eventHandlers" />
		<Button label="SOFT 9" method="calcCode" refName="AS1000_PFD_SOFTKEYS_9" :eventHandlers="eventHandlers" />
		<Button label="SOFT 10" method="calcCode" refName="AS1000_PFD_SOFTKEYS_10" :eventHandlers="eventHandlers" />
		<Button label="SOFT 11" method="calcCode" refName="AS1000_PFD_SOFTKEYS_11" :eventHandlers="eventHandlers" />
		<Button label="SOFT 12" method="calcCode" refName="AS1000_PFD_SOFTKEYS_12" :eventHandlers="eventHandlers" />
	
	</div>

	<div class="text-center generic-section">

		<!-- MFD -->
		<Button label="FLC" method="calcCode" refName="AS1000_MFD_FLC_Push" :eventHandlers="eventHandlers" />
		<Button label="DIR" method="hVar" refName="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" />
		<Button label="MENU" method="hVar" refName="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" />
		<Button label="FPL" method="hVar" refName="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" />
		<Button label="PROC" method="hVar" refName="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" />
		<Button label="CLR" method="hVar" refName="AS1000_MFD_CLR" :eventHandlers="eventHandlers" />
		<Button label="CLR Long" method="hVar" refName="AS1000_MFD_CLR_Long" :eventHandlers="eventHandlers" />
		<Button label="ENT" method="hVar" refName="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" />
		<Button label="Zoom In" method="hVar" refName="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" />
		<Button label="Zoom Out" method="hVar" refName="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" />
		<!-- <Button label="SOFT 3" method="calcCode" refName="AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" /> -->
		<!-- <Button label="SOFT 11" method="calcCode" refName="AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" /> -->

	</div>

	<div class="std-spacing">
		<Switch label="NAV/GPS" method="offset" refName="navGpsSw" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />

		<div class="horiz-spacer"></div>

		<Switch label="GEAR" method="offset" refName="gearHandle" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
	</div>

	<div class="text-center std-spacing generic-section">

		<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />

	</div>

	<div class="text-center std-spacing elec-lights-section">

		<Switch label="BAT MASTER" method="offset" refName="batteryMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="ALTERNATOR" method="offset" refName="alternator1Master" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="AVIONICS" method="offset" refName="avionicsMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{defectWrite: true}" />
		<Switch label="FUEL PUMP" method="offset" refName="fuelPumpEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		<SectionDivider />

		<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		<SectionDivider />

		<Switch label="PANEL" method="offset" refName="lightsInstruments" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Switch label="LANDING" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="PROBE HEAT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" />

	</div>

	<div class="text-center std-spacing generic-section">

		<KnobUpDown label="MAGNETOS" method="offset" refName="starterSwitchEngine1Prop" :dataStore="dataStore" :eventHandlers="eventHandlers" />

	</div>

	<div class="text-center std-spacing generic-section">

		<Switch label="PARK BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Indicator label="COWL FLAPS" method="offset" refName="cowlFlapEngine1" :dataStore="dataStore" />

		<br>

		<Indicator label="Trim" method="offset" refName="trim" :dataStore="dataStore" :options="{classes: 'INOPERABLE'}" />
		<Indicator label="Flaps" method="offset" refName="flapsPositionLeft" :dataStore="dataStore" />

	</div>

	<div class="text-center std-spacing generic-section">

		<Switch label="Fuel Selector" method="offset" refName="fuelSel" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
		<Button label="AUTO BARO" method="presetCommand" refName="autoSetAltimeter" :eventHandlers="eventHandlers" />

	</div>

</div>
</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Switch from '../../../../instruments/generic/Switch.vue'; components.Switch = Switch;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;
import Indicator from '../../../../instruments/generic/Indicator.vue'; components.Indicator = Indicator;
import SectionDivider from '../../../../instruments/layout/SectionDivider.vue'; components.SectionDivider = SectionDivider;

export default {
	components,
	props: ['dataStore', 'eventHandlers', 'panelInfo'],
	setup(props) {
		/**
		 * Add aircraft-specific functions here for formatting the shown values. Common formatting methods are available in FsuipcHtml
		 */
		function flapsHtml(value) {
			if (value == 0) {
				return '<span class="c-darkgray">UP</span>';
			} else if (value < 8300) {
				return 'TAKEOFF';
			} else {
				return 'DOWN';
			}
		}

		props.eventHandlers.onPanelLoad({
			watchValues: {
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
			},
		});
	},
}
</script>

<style scoped>
.generic-section {
	padding: 20px;
}
.elec-lights-section {
	padding: 40px;
}
.horiz-spacer {
	width: 20px;
	display: inline-block;
}
</style>
