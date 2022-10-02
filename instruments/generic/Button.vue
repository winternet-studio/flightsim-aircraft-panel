<!--
Button that can be clicked but no value to display
-->
<template>
	<div @click="clicked" :class="'instrument std-height button inline-block' + (options?.classes ? ' '+ options.classes : '')" :style="(options?.style ? objectToCss(options.style) : '')">
		<div class="bordered pressable">
			<div class="std-lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')"><span v-html="label"></span></div>
		</div>
	</div>
</template>

<script>
import Common from '../../Common.js';

module.exports = {
	props: [
		'method', 'refName', 'label', 'eventHandlers',  //required
		'setValue', 'options',  //optional
	],
	methods: {
		clicked(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			p.eventHandlers.singleClick(event, p.method, p.refName, undefined, p.setValue, p.options);
		},
		objectToCss: Common.objectToCss,
	},
}
</script>

<style scoped>
.instrument {
	width: 85px;
}
.button .std-lbl {
	color: #8d9093;
	font-size: 11px;
	line-height: 14px;
	top: 50%;
	transform: translateY(-50%);
}
.button.small {
	height: 45px;
}
.button.small .std-lbl {
	font-size: 10px;
}
</style>
