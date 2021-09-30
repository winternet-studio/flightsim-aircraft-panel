<!--
Indicator that has up and down buttons and showing current value
-->
<template>
	<span :class="'knob-group' + (options?.classes ? ' '+ options.classes : '')">
		<span @click="eventHandlers.knobUpDownClick(method, action, dataStore.state[method]?.[action]?.internalValue, 'down', customStep, options)" class="knob-down pressable"></span>
		<span class="bordered">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
			<div class="val" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[action]?.internalValue">
				<span v-html="dataStore.state[method]?.[action]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</span>
		<span @click="eventHandlers.knobUpDownClick(method, action, dataStore.state[method]?.[action]?.internalValue, 'up', customStep, options)" class="knob-up pressable"></span>
	</span>
</template>

<script>
module.exports = {
	props: [
		'method', 'action', 'label', 'dataStore', 'eventHandlers',  //required
		'customStep', 'options',  //optional   (custom step will override the default defined in Fsuipc.js)
	],
}
</script>

<style scoped>
p.example-css {
	font-size: 2em;
	text-align: center;
}
</style>
