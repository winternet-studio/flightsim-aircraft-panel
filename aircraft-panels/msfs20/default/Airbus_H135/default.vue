<template>

	<div style="height: 615px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>

			<!--
			DISABLED SINCE ONLY ONE WORKS
			<Toggleable label="PITOT COPILOT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="PITOT PILOT" method="offset" refName="" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			-->

		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
			
		</td>
		<td>

			<Toggleable label="LAND" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="POS" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Toggleable label="ACOL" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<div style="height: 100px"></div>

	<table align="right" class="std-spacing" style="margin-right: 10px">
	<tr>
		<td>

			<Toggleable label="ROTOR BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>
	<div style="clear: both"></div>

	<div style="height: 20px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>
			<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</td>
	</tr>
	</table>

	<div style="height: 100px"></div>

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

export default {
	components,
	props: ['dataStore', 'eventHandlers'],
	setup(props) {
		props.eventHandlers.aircraftInited({
			/**
			 * Add all the values that are being displayed for this aircraft
			 *
			 * Key is the name from map() in Fsuipc.js, value is a function that will format and return HTML for displaying this value on the screen. The value can also be a string in which case it refers to a method in FsuipcHtml.
			 */
			offset: {
				lightsStrobe: 'brightOnValue',
				lightsBeacon: 'brightOnValue',
				lightsNav: 'brightOnValue',
				lightsLanding: 'brightOnValue',
				lightsCabin: 'brightOnValue',
				parkingBrake: 'brightOnValue',
				// pitotHeat: 'brightOffValue',
				transponderState: 'transponderState',
			},
		});
	},
}
</script>

<style>
/* nothing yet */
</style>
