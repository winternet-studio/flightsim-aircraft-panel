<template>
	<span :class="'knob-group' + (clickOptions?.INOPERABLE ? ' INOPERABLE' : '')" v-vind:data-offset-name="functionRef">
		<span @click="eventHandlers.knobUpDownClick(method, functionRef, dataStore.state[method]?.[functionRef]?.internalValue, 'down', clickOptions)" class="knob-down"></span>
		<span class="indic">
			<div class="lbl">{{ label }}</div>
			<div class="val" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue"><span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span></div>
		</span>
		<span @click="eventHandlers.knobUpDownClick(method, functionRef, dataStore.state[method]?.[functionRef]?.internalValue, 'up', clickOptions)" class="knob-up"></span>
	</span>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'label', 'dataStore', 'eventHandlers',  //required
		'clickOptions',  //optional
	],
}
</script>

<style scoped>
p.example-css {
	font-size: 2em;
	text-align: center;
}
</style>
