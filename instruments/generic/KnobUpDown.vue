<!--
Indicator that has up and down buttons and showing current value
-->
<template>
	<div :class="'instrument knob-up-down inline-block' + (options?.classes ? ' '+ options.classes : '')">
		<span @click="clickedDown" class="knob-down pressable"></span>
		<span class="knob-indicator bordered">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
			<div class="val" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</span>
		<span @click="clickedUp" class="knob-up pressable"></span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore', 'eventHandlers',  //required
		'customStep', 'options',  //optional   (custom step will override the default defined in Fsuipc.js)
	],
	methods: {
		clickedDown(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			p.eventHandlers.knobUpDownClick(event, p.method, p.refName, p.dataStore.state[p.method]?.[p.refName]?.internalValue, 'down', p.customStep, p.options);
		},
		clickedUp(event) {
			let p = this.$props;
			p.eventHandlers.knobUpDownClick(event, p.method, p.refName, p.dataStore.state[p.method]?.[p.refName]?.internalValue, 'up', p.customStep, p.options);
		},
	},
}
</script>

<style scoped>
.knob-indicator {
	height: 45px;
	width: 85px;
}
.knob-up-down {
	text-align: center;
}
.knob-up-down > span {
	display: inline-block;
}
.knob-up, .knob-down {
	position: relative;
	top: -11px;
	width: 50px;
	height: 50px;
	background-color: #353d42;
	border-radius: 5px;
}
.knob-up::after, .knob-down::after {
	position: relative;
	font-size: 25px;
	top: 5px;
	color: #656a6d;
}
.knob-up::after {
	content: '▲';
}
.knob-down::after {
	content: '▼';
}
</style>
