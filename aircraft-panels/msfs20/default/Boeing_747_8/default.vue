<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<div class="grid-container grid-50-50">
		<div>
			<div class="text-center std-spacing">
				<div class="section">ENG START</div>
				<Button label="1" method="presetCommand" refName="Asobo.747-8i.Engine.Input.ENG 1 START" :eventHandlers="eventHandlers" />
				<Button label="2" method="presetCommand" refName="Asobo.747-8i.Engine.Input.ENG 2 START" :eventHandlers="eventHandlers" />
				<Button label="3" method="presetCommand" refName="Asobo.747-8i.Engine.Input.ENG 3 START" :eventHandlers="eventHandlers" />
				<Button label="4" method="presetCommand" refName="Asobo.747-8i.Engine.Input.ENG 4 START" :eventHandlers="eventHandlers" />
			</div>
		</div>
		<div>
			<div class="text-center std-spacing">
				<div class="section">FUEL CONTROL</div>
				<div>
					<Button label="1 RUN" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 1 ON" :eventHandlers="eventHandlers" />
					<Button label="2 RUN" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 2 ON" :eventHandlers="eventHandlers" />
					<Button label="3 RUN" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 3 ON" :eventHandlers="eventHandlers" />
					<Button label="4 RUN" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 4 ON" :eventHandlers="eventHandlers" />
				</div>
				<div>
					<Button label="1 CUTOFF" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 1 OFF" :eventHandlers="eventHandlers" />
					<Button label="2 CUTOFF" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 2 OFF" :eventHandlers="eventHandlers" />
					<Button label="3 CUTOFF" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 3 OFF" :eventHandlers="eventHandlers" />
					<Button label="4 CUTOFF" method="presetCommand" refName="Asobo.747-8i.Fuel.Input.FUEL CONTROL ENG 4 OFF" :eventHandlers="eventHandlers" />
				</div>
			</div>
		</div>
	</div>

	<div class="text-center std-spacing">
		<div class="section">ELEC</div>
		<Button label="EXT PWR 1" method="presetCommand" refName="Asobo.747-8i.Electrical.Input.EXTERNAL POWER ON" :eventHandlers="eventHandlers" />
		<Button label="APU GEN 1" method="presetCommand" refName="Asobo.747-8i.Electrical.Input.APU GENERATOR" :eventHandlers="eventHandlers" />
		<div class="spacer-100"></div>
		<Button label="APU OFF" method="presetCommand" refName="Asobo.747-8i.Electrical.Input.APU OFF" :eventHandlers="eventHandlers" />
		<Button label="APU START" method="presetCommand" refName="Asobo.747-8i.Electrical.Input.APU START" :eventHandlers="eventHandlers" />
	</div>

	<div class="std-spacing thelights">
		<Switch label="LANDING" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<SectionDivider />
		<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
	</div>

	<div class="grid-container grid-33-33-33 mcp-panel">
		<div class="text-center std-spacing">
			<div class="section">EFIS</div>
			<div class="text-right">
				<Button label="STD" method="presetCommand" refName="Asobo.747-8i.EFIS.Input.B747 8 EFIS BARO STD PRESS" :eventHandlers="eventHandlers" />
			</div>
			<div>
				<Button label="MODE ↶" method="presetCommand" refName="Asobo.747-8i.EFIS.Input.B747 8 MFD 1 NAV MODE DEC" :eventHandlers="eventHandlers" />
				<Button label="MODE ↷" method="presetCommand" refName="Asobo.747-8i.EFIS.Input.B747 8 MFD 1 NAV MODE INC" :eventHandlers="eventHandlers" />
				<div class="spacer-50"></div>
				<Button label="RANGE ↶" method="presetCommand" refName="Asobo.747-8i.EFIS.Input.B747 8 MFD 1 Range DEC" :eventHandlers="eventHandlers" />
				<Button label="RANGE ↷" method="presetCommand" refName="Asobo.747-8i.EFIS.Input.B747 8 MFD 1 Range INC" :eventHandlers="eventHandlers" />
			</div>
		</div>
		<div class="text-center std-spacing">
			<div class="section">A/P ENGAGE</div>
			<Button label="CMD L" method="presetCommand" refName="Asobo.747-8i.Autopilot.Input.B747 AP Engage L CMD Button Press" :eventHandlers="eventHandlers" />
			<Button label="DISENGAGE" method="presetCommand" refName="Asobo.747-8i.Autopilot.Input.B747 AP Disengage Bar Down" :eventHandlers="eventHandlers" />
		</div>

		<div class="text-center std-spacing">
			<div class="section">EICAS</div>
			<Button label="ENG" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_eng" :eventHandlers="eventHandlers" />
			<Button label="STAT" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_stat" :eventHandlers="eventHandlers" />
			<div>
				<div>
					<Button label="ELEC" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_elec" :eventHandlers="eventHandlers" />
					<Button label="FUEL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_fuel" :eventHandlers="eventHandlers" />
					<Button label="ECS" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_ecs" :eventHandlers="eventHandlers" />
					<Button label="FTCL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_ftcl" :eventHandlers="eventHandlers" />
				</div>
				<div>
					<Button label="HYD" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_hyd" :eventHandlers="eventHandlers" />
					<Button label="DRS" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_drs" :eventHandlers="eventHandlers" />
					<Button label="GEAR" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_gear" :eventHandlers="eventHandlers" />
					<Button label="INFO" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_info" :eventHandlers="eventHandlers" />
				</div>
			</div>
			<Button label="CHKL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_chkl" :eventHandlers="eventHandlers" />
			<Button class="INVISIBLE-FOR-ALIGNMENT" label="CHKL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_chkl" :eventHandlers="eventHandlers" />
			<Button class="INVISIBLE-FOR-ALIGNMENT" label="CHKL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_chkl" :eventHandlers="eventHandlers" />
			<Button class="INVISIBLE-FOR-ALIGNMENT" label="CHKL" method="presetCommand" refName="Asobo.747-8i.EICAS.Input.B747_8_EICAS_CHANGE_PAGE_chkl" :eventHandlers="eventHandlers" />
		</div>
	</div>


	<div class="grid-container grid-50-50 text-center std-spacing pedestal">
		<div>
			<div class="section">FMC L</div>
			<Button label="LEGS" method="presetCommand" refName="Asobo.747-8i.Navigation.B747_8_FMC_1_BTN_LEGS" :eventHandlers="eventHandlers" />
			<Button label="VNAV" method="presetCommand" refName="Asobo.747-8i.Navigation.B747_8_FMC_1_BTN_VNAV" :eventHandlers="eventHandlers" />
			<Button label="PROG" method="presetCommand" refName="Asobo.747-8i.Navigation.B747_8_FMC_1_BTN_PROG" :eventHandlers="eventHandlers" />
			<SectionDivider />
			<Button label="PREV PAGE" method="presetCommand" refName="Asobo.747-8i.Navigation.B747_8_FMC_1_BTN_PREVPAGE" :eventHandlers="eventHandlers" />
			<Button label="NEXT PAGE" method="presetCommand" refName="Asobo.747-8i.Navigation.B747_8_FMC_1_BTN_NEXTPAGE" :eventHandlers="eventHandlers" />
		</div>
		<div>
			<div class="section">FMC R</div>
			<Button label="LEGS" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_LEGS)" :eventHandlers="eventHandlers" />
			<Button label="VNAV" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_VNAV)" :eventHandlers="eventHandlers" />
			<Button label="PROG" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_PROG)" :eventHandlers="eventHandlers" />
			<SectionDivider />
			<Button label="PREV PAGE" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_PREVPAGE)" :eventHandlers="eventHandlers" />
			<Button label="NEXT PAGE" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_NEXTPAGE)" :eventHandlers="eventHandlers" />
			<!-- Typing free text!! -->
			<!--
			<Button label="Type FREETEXT" method="calcCode" refName="(>H:B747_8_FMC_2_BTN_FREETEXT)" :eventHandlers="eventHandlers" />
			-->
		</div>
	</div>

	<div class="grid-container std-spacing section-x">

		<div class="left-edge">
		</div>
		<div class="center-column">
			<Indicator label="Flaps" method="offset" refName="flapsPositionLeft" :dataStore="dataStore" />
		</div>
		<div class="right-edge">
			<Switch label="PARK BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>

	</div>

	<div class="grid-container std-spacing section-y">

		<div class="left-edge">
			<Button label="MASTER CAUTION" method="simControl" refName="MASTER_CAUTION_ACKNOWLEDGE" setValue="0" :eventHandlers="eventHandlers" />
			<KnobUpDown label="TCAS" method="lVar" refName="XMLVAR_ATC_AIRSPACE_MODE_ABV_BLW" readMethod="lVar" readRefName="XMLVAR_ATC_AIRSPACE_MODE_ABV_BLW" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		</div>
		<div class="center-column">
		</div>
		<div class="right-edge">
			<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>

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
			if (value < 10) {
				return '<span class="c-darkgray">UP</span>';  // or 1 (has the same value!)
			} else if (value < 2800) {
				return '5';  //= 2731
			} else if (value < 5500) {
				return '10';  //= 5461
			} else if (value < 11000) {
				return '20';  //= 10922
			} else if (value < 14000) {
				return '25';  //= 13653
			} else {
				return '30';
			}
		}

		props.eventHandlers.onPanelLoad({
			watchValues: {
				offset: {
					flapsPositionLeft: flapsHtml,
					lightsStrobe: 'brightOnValue',
					lightsBeacon: 'brightOnValue',
					lightsNav: 'brightOnValue',
					lightsTaxi: 'brightOnValue',
					lightsLanding: 'brightOnValue',
					lightsCabin: 'brightOnValue',
					parkingBrake: 'brightOnValue',
				},
				lVar: {
					XMLVAR_ATC_AIRSPACE_MODE_ABV_BLW: {
						inputOptions: { validValues: [0, 1, 2], inverseDirection: true },
						toHtml: value => value == 1 ? 'N' : value == 0 ? 'ABV' : 'BLW',
					},
				},
			},
		});
	},
}
</script>

<style>
.panel-container {
	padding: 20px;
}
.thelights {
	margin-top: 50px;
	text-align: right;
	margin-right: 10%;
}
.mcp-panel {
	margin-top: 100px;
}
.pedestal {
	margin-top: 100px;
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
