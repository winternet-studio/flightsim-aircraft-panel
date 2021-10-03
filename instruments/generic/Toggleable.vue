<!--
Button that can be toggled and shows the current value
-->
<template>
	<div @click="clicked" :class="'instrument toggleable inline-block' + (options?.classes ? ' '+ options.classes : '') + (options?.defectWrite ? ' defect-write' : '')">
		<div class="bordered pressable">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">
				<span v-html="label"></span>
			</div>
			<div class="val" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')" :data-internal-value="dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore', 'eventHandlers',  //required
		'setValue', 'options',  //optional
	],
	methods: {
		clicked(event) {  //NOTE: can NOT use arrow functions, then "this" wouldn't be bound (https://v3.vuejs.org/guide/data-methods.html#methods)
			let p = this.$props;
			p.eventHandlers.singleClick(event, p.method, p.refName, p.dataStore.state[p.method]?.[p.refName]?.internalValue, p.setValue, p.options);
		},
	},
}
</script>

<style scoped>
.instrument {
	height: 45px;   /* .toggleable should match this */
	width: 85px;
}
.bordered {
	width: 100%;
}
</style>
