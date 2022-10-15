<!--
Indicator that where dragging up/down/left/right increases or decreases the value
-->
<template>
	<div :class="'instrument knob-touch-drag inline-block' + (options?.classes ? ' '+ options.classes : '')">
		<div class="custom-lbl std-lbl-color" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
		<div @click="pushed" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :class="'knob-indicator bordered' + (pushRefName ? ' pressable' : '')">
			<div class="curr-val" v-if="!options?.hideValue" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[readMethod]?.[readRefName]?.internalValue ?? dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[readMethod]?.[readRefName]?.valueHtml ?? dataStore.state[method]?.[refName]?.valueHtml ?? '87'"></span>
			</div>
		</div>
		<div v-if="pullRefName && !dataStore.appConfig.enableMultiTouch" @click="pulled" class="pull-knob-trigger bordered pressable">P</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore', 'eventHandlers',  //required (except refName if refNameIncr and refNameDecr is set instead)
		'readMethod', 'readRefName',  //optional
		'pushMethod', 'pushRefName', 'pullMethod', 'pullRefName', 'stepScale', 'options',  //optional
		'refNameIncr', 'refNameDecr', 'triggerDist',  //optional  (can be used instead of refName when no specific values and scale exist)
	],
	methods: {
		touchStart(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			if (p.refName) {
				p.eventHandlers.knobTouchStart(
					event,
					p.method,
					p.refName,
					p.dataStore.state[p.readMethod]?.[p.readRefName]?.internalValue ?? p.dataStore.state[p.method]?.[p.refName]?.internalValue,
					p.stepScale,
					p.options,
				);
			} else {
				p.eventHandlers.knobTouchStart(
					event,
					p.method,
					{incr: p.refNameIncr, decr: p.refNameDecr},
					null,
					p.triggerDist,
					p.options,
				);
			}
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
.knob-touch-drag {
	text-align: center;
	width: 75px;
	height: 65px;
}
.knob-touch-drag > span {
	display: inline-block;
}
.knob-indicator {
	height: 45px;
	width: 45px;
	border-radius: 100px;
	position: relative;
	/*user-select: none;*/
}
.instrument.larger-instr .knob-indicator {
	height: 50px;
	width: 50px;
}
.instrument.smaller-instr .knob-indicator {
	height: 40px;
	width: 40px;
}
.curr-val {
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 80%;
	font-weight: normal;
	color: #8d9093;
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
