<!--
Button that can be clicked but no value to display
-->
<template>
	<div @click="eventHandlers.singleClick(method, functionRef, undefined, options)" :class="'button bordered pressable' + (options?.classes ? ' '+ options.classes : '')" :style="(options?.style ? objectToCss(options.style) : '')">
		<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">{{ label }}</div>
	</div>
</template>

<script>
import Common from '../../Common.js';

module.exports = {
	props: [
		'method', 'functionRef', 'label', 'eventHandlers',  //required
		'options',  //optional
	],
	methods: {
		objectToCss: Common.objectToCss,
	},
}
</script>

<style scoped>
.clickable {
	height: 45px;   /* to match size of .toggleable */
	display: inline-flex;  /* for vert center of text - see https://stackoverflow.com/a/13515693/2404541 */
	justify-content: center;
	align-content: center;
	flex-direction: column;
}
.clickable .lbl {
	color: #8d9093;
	font-size: 14px;
	line-height: 16px;
}
.clickable.small {
	height: 25px;
}
.clickable.small .lbl {
	font-size: 10px;
}
</style>
