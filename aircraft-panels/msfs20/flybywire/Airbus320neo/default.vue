<!--

Complete API:
	https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/a32nx_api/

-->

<template>
<div :class="'panel-container grid-container '+ panelInfo.path.join(' ')">
	<div class="all-instruments">



		<div class="grid-container text-center std-spacing the-overhead">
			<div class="overhead-center-left">

				<!--
				DOESN'T CURRENTLY WORK
				<Switch label="10" method="lVar" refName="A320_Neo_MFD_Range" lvarValue="0" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="20" method="lVar" refName="A320_Neo_MFD_Range" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="FUEL" method="hVar" refName="A320_Neo_EICAS_2_ECAM_CHANGE_PAGE_FUEL" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ENG" method="hVar" refName="A320_Neo_EICAS_2_ECAM_CHANGE_PAGE_ENG" lvarValue="1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				-->

				<div class="section">Elec</div>
				<Switch label="BAT" method="offset" refName="batteryMaster" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div>&nbsp;</div>

				<Switch label="GEN 1" method="offset" refName="genEng1" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="APU GEN" method="offset" refName="genApu" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="GEN 2" method="offset" refName="genEng2" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div style="height: 250px"></div>

				<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="WING" method="offset" refName="lightsWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="NAV & LOGO" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div style="height: 15px"></div>

				<Switch label="----" method="" refName="" :dataStore="dataStore" :eventHandlers="eventHandlers" style="opacity: 0" /><!-- just for proper spacing -->
				<Switch label="LANDING LTS" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" style="width: 178px" />
				<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			</div>
			<div class="overhead-center-middle">

				<div class="section">Fuel</div>

				<!-- TODO: some of these are to be Switch instead of Indicator -->

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

			</div>
			<div class="overhead-center-right">

				<div style="height: 190px"></div>

				<div class="section">Anti-Ice</div>

				<Switch label="WING" method="offset" refName="antiIceWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ENG 1" method="offset" refName="antiIceEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ENG 2" method="offset" refName="antiIceEng2" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div style="height: 137px"></div>

				<Switch label="SEAT BELT" method="offset" refName="seatBelts" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			</div>
		</div>

		<div class="text-center std-spacing the-mcp">
			<Annunciator text="APU VOLTAGE" method="offset" refName="apuVoltage" :dataStore="dataStore" />
			<Annunciator text="FD" method="offset" refName="mcpFDSw" :dataStore="dataStore" />
			<Annunciator text="A/P" method="offset" refName="mcpAPAnnun" :dataStore="dataStore" />
			<Annunciator text="SPEED" method="offset" refName="mcpSpdAnnun" :dataStore="dataStore" />
			<Annunciator text="N1" method="offset" refName="mcpN1Annun" :dataStore="dataStore" />
			<Annunciator text="APPR" method="offset" refName="mcpAppAnnun" :dataStore="dataStore" />
			<Annunciator text="HDG" method="offset" refName="mcpHdgAnnun" :dataStore="dataStore" />
			<Annunciator text="NAV" method="offset" refName="mcpNav1Annun" :dataStore="dataStore" />
			<Annunciator text="ALT" method="offset" refName="mcpAltAnnun" :dataStore="dataStore" />
		</div>

		<div class="grid-container text-center std-spacing the-pedestal">
			<div class="left-edge">

				<Switch label="NAV/GPS" method="offset" refName="navGpsSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			</div>
			<div class="center-column">

				<Switch label="Spoilers" method="offset" refName="spoilersArm" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<br>
				<Indicator label="Speed Break" method="offset" refName="spdBreak" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
				<Switch label="Gear" method="offset" refName="gearHandle" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<br>
				<Switch label="Parking Break" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Indicator label="Flaps" method="offset" refName="flaps" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
				<br>
				<Indicator label="ENG 1 FUEL" method="offset" refName="eng1CutoffSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
				<Indicator label="ENG 2 FUEL" method="offset" refName="eng2CutoffSw" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			</div>
			<div class="right-edge">

				<Indicator label="Trim" method="offset" refName="trim" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />
				<br>
				<Indicator label="-SPACER-" :options="{invisible: true}" :dataStore="dataStore" />
				<br>
				<Indicator label="XPNDR" method="offset" refName="sqwkCode" :options="{classes: 'INOPERABLE'}" :dataStore="dataStore" />

			</div>
		</div>



	</div>
	<div class="mcdu">



			<iframe src="http://simbridge.local:8380/interfaces/mcdu"></iframe>



	</div>
</div>
</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Switch from '../../../../instruments/generic/Switch.vue'; components.Switch = Switch;
import Indicator from '../../../../instruments/generic/Indicator.vue'; components.Indicator = Indicator;
import Annunciator from '../../../../instruments/generic/Annunciator.vue'; components.Annunciator = Annunciator;
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
			},
		});
	},
}
</script>

<style scoped>
.panel-container {
	grid-template-areas: 'all-instruments mcdu';
}
.all-instruments {
	grid-area: all-instruments;
}
.mcdu {
	grid-area: mcdu;
	text-align: right;
}
.mcdu iframe {
	width: 36vw;
	height: 100vh;
}

.the-overhead {
	grid-template-areas: 'overhead-center-left overhead-center-middle overhead-center-right';
}
.overhead-center-left {
	grid-area: overhead-center-left;
}
.overhead-center-middle {
	grid-area: overhead-center-middle;
}
.overhead-center-right {
	grid-area: overhead-center-right;
}

.the-mcp {
	margin-top: 30px;
	margin-bottom: 30px;
}
</style>
