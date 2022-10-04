<!--
Button that can be toggled between two states and shows the current value
-->
<template>
	<div @click="clicked" :class="'instrument std-width std-height toggle inline-block' + (options?.classes ? ' '+ options.classes : '') + (options?.defectWrite ? ' defect-write' : '')">
		<div class="bordered pressable">
			<div class="std-lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">
				<span v-html="label"></span>
			</div>
			<div class="std-val" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')" :data-internal-value="dataStore.state[readMethod]?.[readRefName]?.internalValue ?? dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[readMethod]?.[readRefName]?.valueHtml ?? dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore', 'eventHandlers',  //required
		'readMethod', 'readRefName',  //optional
		'setValue', 'options',  //optional
	],
	methods: {
		clicked(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			p.eventHandlers.singleClick(
				event,
				p.method,
				p.refName,
				p.dataStore.state[p.readMethod]?.[p.readRefName]?.internalValue ?? p.dataStore.state[p.method]?.[p.refName]?.internalValue,
				p.setValue,
				p.options,
			);
		},
	},
}
</script>

<style scoped>
.small-instr {
	width: 56px !important;
	margin: 2px;
}
.small-instr .bordered {
	padding: 2px;
}
.small-instr .std-lbl {
	font-size: 11px !important;
	line-height: 12px !important;
}
.small-instr .std-val {
	font-size: 9px !important;
	line-height: 10px !important;
}
</style>
