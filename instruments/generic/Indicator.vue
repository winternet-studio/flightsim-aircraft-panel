<!--
Indicator that displays a value but cannot be clicked
-->
<template>
	<div :class="'indicator bordered'+ (options?.classes ? ' '+ options.classes : '')" :style="(options?.invisible ? {opacity: 0} : {})">
		<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">
			<span v-html="label"></span>
		</div>
		<div class="val" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue">
			<span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'label', 'dataStore',  //required
		'options',  //optional
	],
}
</script>

<style scoped>
p.example-css {
	font-size: 2em;
	text-align: center;
}
</style>
