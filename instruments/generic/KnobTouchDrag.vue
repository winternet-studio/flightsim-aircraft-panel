<!--
Indicator that where dragging up/down/left/right increases or decreases the value
-->
<template>
	<div :class="'instrument knob-touch-drag inline-block' + (options?.classes ? ' '+ options.classes : '')">
		<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
		<div @click="pushed" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :class="'knob-indicator bordered' + (pushRefName ? ' pressable' : '')">
			<div class="val" v-if="!options?.hideValue" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</div>
		<div v-if="pullRefName && !dataStore.appConfig.enableMultiTouch" @click="pulled" class="pull-knob-trigger bordered pressable">P</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore', 'eventHandlers',  //required
		'pushMethod', 'pushRefName', 'pullMethod', 'pullRefName', 'stepScale', 'options',  //optional
	],
	methods: {
		touchStart(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			p.eventHandlers.knobTouchStart(event, p.method, p.refName, p.dataStore.state[p.method]?.[p.refName]?.internalValue, p.stepScale, p.options);
		},
		touchMove(event) {
			let p = this.$props;
			p.eventHandlers.knobTouchMove(event);
		},
		touchEnd(event) {
			let p = this.$props;
			p.eventHandlers.knobTouchEnd(event);
		},
		pushed(event) {
			let p = this.$props;
			if (p.pushRefName) {
				p.eventHandlers.singleClick(event, p.pushMethod, p.pushRefName, undefined, undefined, p.options);
			}
		},
		pulled(event) {
			let p = this.$props;
			if (p.pullRefName) {
				p.eventHandlers.singleClick(event, p.pullMethod, p.pullRefName, undefined, undefined, p.options);
			}
		},
	},
}
</script>

<style scoped>
.knob-indicator {
	height: 45px;
	width: 45px;
	border-radius: 45px;
	/*user-select: none;*/
}
.instrument .val {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	font-size: 80%;
	font-weight: normal;
	color: #8d9093;
}
.knob-touch-drag {
	text-align: center;
}
.knob-touch-drag > span {
	display: inline-block;
}
.pull-knob-trigger {
	margin-left: 10px;
	width: 15px;
	height: 15px;
	border-radius: 15px;
	padding: 0;
	color: #202729;
}
</style>
