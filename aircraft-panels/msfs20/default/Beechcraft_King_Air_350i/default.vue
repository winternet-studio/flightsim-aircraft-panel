<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<div class="text-center std-spacing section1">
		<Button label="MASTER WARNING" method="simControl" refName="MASTER_WARNING_ACKNOWLEDGE" setValue="0" :eventHandlers="eventHandlers" />
		<Button label="MASTER CAUTION" method="simControl" refName="MASTER_CAUTION_ACKNOWLEDGE" setValue="0" :eventHandlers="eventHandlers" />
	</div>

	<div class="text-center std-spacing theautopilot">
		<Button label="FD" method="presetCommand" refName="Asobo.King Air 350i.Autopilot.KA_FD1" :eventHandlers="eventHandlers" />
		<Button label="FLC" method="presetCommand" refName="Asobo.King Air 350i.Autopilot.KA_FLC" :eventHandlers="eventHandlers" />
		<Button label="SYNC HDG" method="presetCommand" refName="Asobo.King Air 350i.Autopilot.KA_Push_Heading" :eventHandlers="eventHandlers" />
		<Switch label="YD" method="offset" refName="yawDamper" :dataStore="dataStore" :eventHandlers="eventHandlers" />
	</div>

	<div class="grid-container std-spacing section-z">
		<div class="left-edge">
			<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>
	</div>

	<div class="text-center std-spacing thelights">

		<Switch label="LANDING" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="ICE" method="offset" refName="lightsWing" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false, classes: 'INOPERABLE'}" /><!-- ONLY TURNING IT ON WORKS CURRENTLY -->
		<Switch label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="RECOG" method="offset" refName="lightsRecognition" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		<div class="extra-spacer">
			<SectionDivider />
		</div>

		<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

	</div>

	<div class="grid-container std-spacing section-x">

		<div class="left-edge">
			<Switch label="L GEN" method="offset" refName="generatorEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="R GEN" method="offset" refName="generatorEng2" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>
		<div class="center-column">
			<Indicator label="Trim" method="offset" refName="trim" :dataStore="dataStore" :options="{classes: 'INOPERABLE'}" />
			<Indicator label="Flaps" method="offset" refName="flapsPositionLeft" :dataStore="dataStore" />
		</div>
		<div class="right-edge">
			<Switch label="PARK BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>

	</div>

	<div class="grid-container std-spacing section-y">

		<div class="left-edge">
			<Button label="IGN LEFT" method="presetCommand" refName="Asobo.King Air 350i.Engines.KA_ENG1_START_TOGGLE" :eventHandlers="eventHandlers" />
			<Button label="IGN RIGHT" method="presetCommand" refName="Asobo.King Air 350i.Engines.KA_ENG2_START_TOGGLE" :eventHandlers="eventHandlers" />
		</div>
		<div class="center-column">
		</div>
		<div class="right-edge">
			<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Button label="AUTO BARO" method="presetCommand" refName="autoSetAltimeter" :eventHandlers="eventHandlers" />
		</div>

	</div>

</div>
</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Switch from '../../../../instruments/generic/Switch.vue'; components.Switch = Switch;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;
import KnobTouchDrag from '../../../../instruments/generic/KnobTouchDrag.vue'; components.KnobTouchDrag = KnobTouchDrag;
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
			if (value < 10) {
				return '<span class="c-darkgray">UP</span>';
			} else if (value < 8200) {
				return 'APPR';  //= 8192
			} else {
				return 'DOWN';  //= 16383
			}
		}

		props.eventHandlers.onPanelLoad({
			watchValues: {
				offset: {
					flapsPositionLeft: flapsHtml,
					generatorEng1: 'brightOffValue',
					generatorEng2: 'brightOffValue',
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
			},
		});
	},
}
</script>

<style>
.panel-container {
	margin-top: 415px;
	padding: 20px;
}
.theautopilot {
	margin-top: 50px;
	margin-bottom: 35px;
}
.thelights {
	margin-top: 100px;
	margin-bottom: 100px;
}
.extra-spacer {
	display: inline-block;
	padding-left: 50px;
	padding-right: 50px;
}

.section-x {
	grid-template-areas: 'left-edge center-column right-edge';
}
.section-x .left-edge {
	grid-area: left-edge;
}
.section-x .center-column {
	grid-area: center-column;
}
.section-x .right-edge {
	grid-area: right-edge;
}

.section-y {
	grid-template-areas: 'left-edge center-column right-edge';
	margin-top: 20px;
}
.section-y .left-edge {
	grid-area: left-edge;
}
.section-y .center-column {
	grid-area: center-column;
}
.section-y .right-edge {
	grid-area: right-edge;
}
</style>
