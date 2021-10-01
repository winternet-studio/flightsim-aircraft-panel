<!--
Button that can be clicked but no value to display
-->
<template>
	<div @click="eventHandlers.singleClick(method, action, undefined, setValue, options)" :class="'instrument button inline-block' + (options?.classes ? ' '+ options.classes : '')" :style="(options?.style ? objectToCss(options.style) : '')">
		<div class="bordered pressable">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')"><span v-html="label"></span></div>
		</div>
	</div>
</template>

<script>
import Common from '../../Common.js';

module.exports = {
	props: [
		'method', 'action', 'label', 'eventHandlers',  //required
		'setValue', 'options',  //optional
	],
	methods: {
		objectToCss: Common.objectToCss,
	},
}
</script>

<style scoped>
.instrument {
	height: 45px;   /* to match size of .toggleable */
	width: 85px;
}
.bordered {
	height: inherit;
	width: 100%;
}
.button .lbl {
	color: #8d9093;
	font-size: 14px;
	line-height: 16px;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
.button.small {
	height: 25px;
}
.button.small .lbl {
	font-size: 10px;
}
</style>
