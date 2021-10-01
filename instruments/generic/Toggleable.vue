<!--
Button that can be toggled and shows the current value
-->
<template>
	<div @click="eventHandlers.singleClick(method, action, dataStore.state[method]?.[action]?.internalValue, setValue, options)" :class="'instrument toggleable inline-block' + (options?.classes ? ' '+ options.classes : '') + (options?.defectWrite ? ' defect-write' : '')">
		<div class="bordered pressable">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">
				<span v-html="label"></span>
			</div>
			<div class="val" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')" :data-internal-value="dataStore.state[method]?.[action]?.internalValue">
				<span v-html="dataStore.state[method]?.[action]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'action', 'label', 'dataStore', 'eventHandlers',  //required
		'setValue', 'options',  //optional
	],
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
