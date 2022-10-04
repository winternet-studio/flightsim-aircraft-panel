<template>

	<div style="height: 615px"></div>

	<table align="center" class="std-spacing">
	<tr>
		<td>

			<!--
			DISABLED SINCE ONLY ONE WORKS
			<Switch label="PITOT COPILOT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="PITOT PILOT" method="offset" refName="" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			-->

		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
			
		</td>
		<td>

			<Switch label="LAND" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="POS" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="ACOL" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</td>
	</tr>
	</table>

	<div style="height: 100px"></div>

	<table align="right" class="std-spacing" style="margin-right: 10px">
	<tr>
		<td>

			<Switch label="ROTOR BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />

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
			<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
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
import Switch from '../../../../instruments/generic/Switch.vue'; components.Switch = Switch;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;

export default {
	components,
	props: ['dataStore', 'eventHandlers'],
	setup(props) {
		props.eventHandlers.onPanelLoad({
			watchValues: {
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
			},
		});
	},
}
</script>

<style>
/* nothing yet */
</style>
