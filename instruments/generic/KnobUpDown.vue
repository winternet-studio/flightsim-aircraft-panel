<!--
Indicator that has up and down buttons and showing current value
-->
<template>
	<span :class="'knob-group' + (options?.classes ? ' '+ options.classes : '')" :data-offset-name="functionRef">
		<span @click="eventHandlers.knobUpDownClick(method, functionRef, dataStore.state[method]?.[functionRef]?.internalValue, 'down', options)" class="knob-down pressable"></span>
		<span class="bordered">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
			<div class="val" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue">
				<span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</span>
		<span @click="eventHandlers.knobUpDownClick(method, functionRef, dataStore.state[method]?.[functionRef]?.internalValue, 'up', options)" class="knob-up pressable"></span>
	</span>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'label', 'dataStore', 'eventHandlers',  //required
		'options',  //optional
	],
}
</script>

<style scoped>
p.example-css {
	font-size: 2em;
	text-align: center;
}
</style>
