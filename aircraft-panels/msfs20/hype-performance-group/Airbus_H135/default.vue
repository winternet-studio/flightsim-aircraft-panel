<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<div class="grid-container text-center std-spacing section1">
		<div>

			<!--
			DISABLED SINCE ONLY ONE WORKS
			<Switch label="PITOT COPILOT" method="offset" refName="pitotHeat" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="PITOT PILOT" method="offset" refName="" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			-->

		</div>
		<div>

			<Switch label="LAND" method="offset" refName="lightsLanding" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="POS" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="ACOL" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />

		</div>
	</div>

	<div class="grid-container std-spacing otherstuff1">
		<div class="right-edge">
			<Switch label="ROTOR BRAKE" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>
	</div>

	<div class="grid-container text-center std-spacing section2">
		<div>
			<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>
	</div>

	<div class="grid-container std-spacing otherstuff2">
		<div class="right-edge">
			<Switch label="DOME LTS" method="offset" refName="lightsCabin" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<br>
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

export default {
	components,
	props: ['dataStore', 'eventHandlers', 'panelInfo'],
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

<style scoped>
.panel-container {
	margin-top: 560px;
	padding: 20px;
}
.otherstuff1,
.otherstuff2 {
	margin-top: 100px;
}
.section2 {
	margin-top: 20px;
}
</style>
