<template>

	<div style="height: 35px"></div>

	<table class="glass-section">
	<tr>
		<td style="vertical-align: bottom">
			<!-- Left of PFD -->
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
				<td><Button label="AP" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="FD" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_FD" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="HDG" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP_HDG" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ALT" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP_ALT" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="NAV" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP_NAV" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="APR" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP_APR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="BC" method="presetCommand" refName="Microsoft.Generic.Autopilot.AP_BC_HOLD" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="VS" method="presetCommand" refName="Asobo.Cessna 172.Autopilot.C_172_AP_VS" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NOSE UP" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_NOSE_UP" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FLC" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_FLC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NOSE DN" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_NOSE_DN" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td colspan="2" style="text-align: center">
					<KnobTouchDrag label="ALT" method="offset" refName="autopilotAltitude" stepScale="100" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				</td>
			</tr>
			</table>

		</td>
		<td>
			<!-- PFD -->
			<div class="displays display-width pfd-horiz-position">Place PFD here</div>

			<table class="softkeys-table display-width pfd-horiz-position">
			<tr>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_PFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
			</tr>
			</table>

		</td>
		<td style="vertical-align: bottom">
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
				<td><Button label="🔎+" method="hVar" refName="AS1000_PFD_RANGE_DEC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="🔎-" method="hVar" refName="AS1000_PFD_RANGE_INC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="DIR" method="hVar" refName="AS1000_PFD_DIRECTTO" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="MENU" method="hVar" refName="AS1000_PFD_MENU_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FPL" method="hVar" refName="AS1000_PFD_FPL_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="PROC" method="hVar" refName="AS1000_PFD_PROC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="CLR" method="hVar" refName="AS1000_PFD_CLR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ENT" method="hVar" refName="AS1000_PFD_ENT_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td>
					<KnobTouchDrag label="FMS" method="presetCommand" refNameIncr="Microsoft.Generic.Avionics.AS1000_PFD_FMS_Lower_INC" refNameDecr="Microsoft.Generic.Avionics.AS1000_PFD_FMS_Lower_DEC" triggerDist="30" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'larger-instr'}" />
				</td>
				<td>
					<KnobTouchDrag label="&nbsp;" method="presetCommand" refNameIncr="Microsoft.Generic.Avionics.AS1000_PFD_FMS_Upper_INC" refNameDecr="Microsoft.Generic.Avionics.AS1000_PFD_FMS_Upper_DEC" triggerDist="30" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'smaller-instr'}" />
				</td>
			</tr>
			</table>

		</td>
		<td>
			<!-- Center panel -->
			<table>
			<tr>
				<td><Button label="COM1<br>MIC" method="presetCommand" refName="Microsoft.Generic.Radio.COM1_TRANSMIT_SELECT" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<!-- <td><Button label="COM1" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MID_COM_1_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td> -->
				<td><Button label="ALL" method="presetCommand" refName="Microsoft.Generic.Radio.COM_RECEIVE_ALL_TOGGLE" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="COM2<br>MIC" method="presetCommand" refName="Microsoft.Generic.Radio.COM2_TRANSMIT_SELECT" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<!-- <td><Button label="COM2" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MID_COM_2_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td> -->
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td></td>
			</tr>
			<tr>
				<td><Button label="DME" method="presetCommand" refName="Microsoft.Generic.Radio.RADIO_DME1_IDENT_TOGGLE" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NAV1" method="presetCommand" refName="Microsoft.Generic.Radio.RADIO_VOR1_IDENT_TOGGLE" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="ADF" method="presetCommand" refName="Microsoft.Generic.Radio.RADIO_ADF_IDENT_TOGGLE" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="NAV2" method="presetCommand" refName="Microsoft.Generic.Radio.RADIO_VOR2_IDENT_TOGGLE" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			</table>

		</td>
		<td>
			<!-- Left side of MFD -->
			<!-- Is identical to left side of PFD! -->
		</td>
		<td>
			<!-- MFD -->
			<div class="displays display-width mfd-horiz-position">Place MFD here</div>

			<table class="softkeys-table display-width mfd-horiz-position">
			<tr>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_1" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_2" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_3" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_4" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_5" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_6" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_7" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_8" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_9" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_10" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_11" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
				<td><Button label="▲" method="presetCommand" refName="Microsoft.Generic.Avionics.AS1000_MFD_SOFTKEYS_12" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons softkey'}" /></td>
			</tr>
			</table>

		</td>
		<td style="vertical-align: bottom">
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
				<td><Button label="🔎+" method="hVar" refName="AS1000_MFD_RANGE_DEC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="🔎-" method="hVar" refName="AS1000_MFD_RANGE_INC" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="DIR" method="hVar" refName="AS1000_MFD_DIRECTTO" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="MENU" method="hVar" refName="AS1000_MFD_MENU_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="FPL" method="hVar" refName="AS1000_MFD_FPL_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="PROC" method="hVar" refName="AS1000_MFD_PROC_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td><Button label="CLR" method="hVar" refName="AS1000_MFD_CLR" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
				<td><Button label="ENT" method="hVar" refName="AS1000_MFD_ENT_Push" :eventHandlers="eventHandlers" :options="{classes: 'g1000-buttons'}" /></td>
			</tr>
			<tr>
				<td>
					<KnobTouchDrag label="FMS" method="presetCommand" refNameIncr="Microsoft.Generic.Avionics.AS1000_MFD_FMS_Lower_INC" refNameDecr="Microsoft.Generic.Avionics.AS1000_MFD_FMS_Lower_DEC" triggerDist="30" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'larger-instr'}" />
				</td>
				<td>
					<KnobTouchDrag label="&nbsp;" method="presetCommand" refNameIncr="Microsoft.Generic.Avionics.AS1000_MFD_FMS_Upper_INC" refNameDecr="Microsoft.Generic.Avionics.AS1000_MFD_FMS_Upper_DEC" triggerDist="30" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'smaller-instr'}" />
				</td>
			</tr>
			</table>

		</td>
	</tr>
	</table>

	<div style="height: 30px"></div>

	<table class="std-spacing">
	<tr>
		<td>
			<Switch label="MASTER ALT" method="offset" refName="alternator1Master" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
		</td>
		<td>
			<Button label="MASTER BAT" method="simControl" refName="TOGGLE_MASTER_BATTERY" setValue="1" :eventHandlers="eventHandlers" />
		</td>
		<td>
			<Button label="AVIONICS BUS 1" method="calcCode" refName="24 (>K:ELECTRICAL_CIRCUIT_TOGGLE) 2 (>K:ELECTRICAL_BUS_TO_BUS_CONNECTION_TOGGLE)" :eventHandlers="eventHandlers" />
		</td>
		<td>
			<Button label="AVIONICS BUS 2" method="calcCode" refName="25 (>K:ELECTRICAL_CIRCUIT_TOGGLE) 2 (>K:ELECTRICAL_BUS_TO_BUS_CONNECTION_TOGGLE)" :eventHandlers="eventHandlers" />
		</td>
		<td>
			<Button label="STBY BATT" method="simControl" refName="TOGGLE_MASTER_BATTERY" setValue="2" :eventHandlers="eventHandlers" />
		</td>
		<td style="padding-left: 50px">
			<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

	<div class="std-spacing" style="padding-left: 10px">


		<div style="display: inline-block; width: 50px"></div>


	</div>

	<div style="height: 2px"></div>

	<table class="std-spacing">
	<tr>
		<td style="padding-left: 10px; text-align: center">

			<KnobTouchDrag label="SW/CB PANEL" method="lVar" refName="AS1000_MFD_Brightness" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td style="text-align: center">

			<KnobTouchDrag label="STBY IND" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td>
			<SectionDivider />
		</td>
		<td>

			<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Switch label="LANDING" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Switch label="NAV" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	<tr>
		<td style="padding-left: 10px; text-align: center">

			<KnobTouchDrag label="PEDESTAL" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td style="text-align: center">

			<KnobTouchDrag label="AVIONICS" method="lVar" refName="AS1000_MFD_Brightness" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td>
			<SectionDivider />
		</td>
		<td>

			<Switch label="FUEL PUMP" method="offset" refName="fuelPumpEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />
			<Switch label="PROBE HEAT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{sound: false}" />

		</td>
	</tr>
	</table>

	<table>
	<tr>
		<td style="padding-left: 10px; vertical-align: middle">

			<KnobUpDown label="MAGNETOS" method="offset" refName="starterSwitchEngine1Prop" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
		<td style="padding-left: 380px; vertical-align: middle">

			<Switch label="PARK BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

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
	<tr>
		<td class="std-spacing">
			<Switch label="Fuel Selector" method="offset" refName="fuelSel" :dataStore="dataStore" :eventHandlers="eventHandlers" :options="{classes: 'INOPERABLE'}" />
		</td>
	</tr>
	</table>

	<table align="right" class="std-spacing">
	<tr>
		<td>
			<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
		<td style="padding-right: 10px">
			<Button label="AUTO BARO" method="presetCommand" refName="autoSetAltimeter" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

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
	props: ['dataStore', 'eventHandlers'],
	setup(props) {
		/**
		 * Add aircraft-specific functions here for formatting the shown values. Common formatting methods are available in FsuipcHtml
		 */
		function flapsHtml(value) {
			if (value < 10) {
				return '<span class="c-darkgray">UP</span>';
			} else if (value < 5500) {
				return '10°';
			} else if (value < 11000) {
				return '20°';
			} else {
				return '30°';
			}
		}

		props.eventHandlers.onPanelLoad({
			watchValues: {
				offset: {
					avionicsMaster: 'brightOffValue',
					alternator1Master: 'brightOffValue',
					autopilotAltitude: 'pass',
					batteryMaster: 'brightOffValue',
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
				},
			},
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
	height: 40px !important;
	margin: 2px;
}
.g1000-buttons .std-lbl {
	font-size: 9px !important;
	line-height: 10px !important;
}
.g1000-buttons.softkey .std-lbl {
	opacity: 0.3;
	font-size: 10px;
}
</style>
