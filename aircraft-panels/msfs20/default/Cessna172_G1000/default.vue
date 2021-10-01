<template>

	<div style="height: 35px"></div>

	<table class="glass-section">
	<tr>
		<td>
			<!-- Left of PFD -->

		</td>
		<td>
			<!-- PFD -->
			<div class="displays display-width pfd-horiz-position">Place PFD here</div>

			<table class="softkeys-table display-width pfd-horiz-position">
			<tr>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
			</tr>
			</table>

		</td>
		<td style="vertical-align: bottom; padding-bottom: 35px">
			<!-- Right side of PFD -->
			<table>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="🔎+" method="hVar" action="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="🔎-" method="hVar" action="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="DIR" method="hVar" action="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="MENU" method="hVar" action="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FPL" method="hVar" action="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="PROC" method="hVar" action="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="CLR" method="hVar" action="AS1000_MFD_CLR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ENT" method="hVar" action="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			</table>

		</td>
		<td>
			<!-- Center panel -->
			<table>
			<tr>
				<td><Button label="COM1<br>MIC" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MID_COM_Mic_1_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="COM1" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MID_COM_1_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="COM2<br>MIC" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MID_COM_Mic_2_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="COM2" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MID_COM_2_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			</table>

		</td>
		<td style="vertical-align: bottom; padding-bottom: 35px">
			<!-- Left side of MFD -->
			<table>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="AP" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_AP" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="FD" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_FD" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="HDG" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_AP_HDG" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ALT" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_AP_ALT" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="NAV" method="presetCommand" action="sobo.Cessna 172.Autopilot.C_172_AP_NAV" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="APR" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_AP_APR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="BC" method="presetCommand" action="Microsoft.Generic.Autopilot.AP_BC_HOLD" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="VS" method="presetCommand" action="Asobo.Cessna 172.Autopilot.C_172_AP_VS" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NOSE UP" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_NOSE_UP" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FLC" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_FLC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NOSE DN" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_NOSE_DN" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			</table>
			
		</td>
		<td>
			<!-- MFD -->
			<div class="displays display-width mfd-horiz-position">Place MFD here</div>

			<table class="softkeys-table display-width mfd-horiz-position">
			<tr>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" action="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
			</tr>
			</table>

		</td>
		<td style="vertical-align: bottom; padding-bottom: 35px">
			<!-- Right side of MFD -->
			<table>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="🔎+" method="hVar" action="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="🔎-" method="hVar" action="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="DIR" method="hVar" action="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="MENU" method="hVar" action="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FPL" method="hVar" action="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="PROC" method="hVar" action="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="CLR" method="hVar" action="AS1000_MFD_CLR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ENT" method="hVar" action="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			</table>

		</td>
	</tr>
	</table>

	<div style="height: 50px"></div>

	<div class="std-spacing" style="padding-left: 10px">

		<Toggleable label="BAT MASTER" method="offset" action="batteryMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Toggleable label="ALTERNATOR" method="offset" action="alternator1Master" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		<Toggleable label="AVIONICS" method="offset" action="avionicsMaster" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{defectWrite: true}" />

	</div>

	<div style="height: 15px"></div>

	<table class="std-spacing">
	<tr>
		<td style="padding-left: 10px">

			<Button label="SW / CB<br>PANELS" method="offset" action="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
			<Button label="STBY<br>IND" method="offset" action="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />

		</td>
		<td>
			<SectionDivider />
		</td>
		<td>

			<Toggleable label="BEACON" method="offset" action="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="LANDING" method="offset" action="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="TAXI" method="offset" action="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="NAV" method="offset" action="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="STROBE" method="offset" action="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	<tr>
		<td style="padding-left: 10px">

			<Button label="PEDESTAL" method="offset" action="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
			<Button label="AVIONICS" method="offset" action="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />

		</td>
		<td>
			<SectionDivider />
		</td>
		<td>

			<Toggleable label="PANEL" method="offset" action="lightsInstruments" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="FUEL PUMP" method="offset" action="fuelPumpEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Toggleable label="PROBE HEAT" method="offset" action="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	</table>

	<table>
	<tr>
		<td style="padding-left: 10px; vertical-align: middle">

			<KnobUpDown label="MAGNETOS" method="offset" action="starterSwitchEngine1Prop" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td style="padding-left: 380px; vertical-align: middle">

			<Toggleable label="PARK BRAKE" method="offset" action="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td>


		</td>
	</tr>
	</table>

	<table align="center">
	<tr>
		<td class="std-spacing" style="text-align: center">

			<Indicator label="Trim" method="offset" action="trim" :dataStore="dataStore" :options="{classes: 'INOPERABLE'}" />
			<Indicator label="Flaps" method="offset" action="flapsPositionLeft" :dataStore="dataStore" />

		</td>
	</tr>
	<tr>
		<td class="std-spacing">
			<Toggleable label="Fuel Selector" method="offset" action="fuelSel" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
		</td>
	</tr>
	</table>

	<table align="right" class="std-spacing">
	<tr>
		<td>
			<Toggleable label="DOME LTS" method="offset" action="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
		<td style="padding-right: 10px">
			<Button label="AUTO BARO" method="presetCommand" action="autoSetAltimeter" :eventHandlers="eventHandlers" />
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
.glass-section {
	width: 100%;
}
.glass-section td > * {
	margin-left: auto;
	margin-right: auto;
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
	text-align: center;
}
.softkeys-table td {
	padding: 0;
}
.g1000-buttons {
	width: 56px !important;
	height: 25px !important;
	margin: 2px;
}
.g1000-buttons .bordered {
	padding: 2px;
}
.g1000-buttons .lbl {
	font-size: 9px !important;
	line-height: 10px !important;
}
.g1000-buttons.softkey .lbl {
	opacity: 0.3;
	font-size: 10px;
}
</style>
