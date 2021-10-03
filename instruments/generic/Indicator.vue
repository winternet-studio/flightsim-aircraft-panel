<!--
Indicator that displays a value but cannot be clicked
-->
<template>
	<div :class="'instrument indicator inline-block'+ (options?.classes ? ' '+ options.classes : '')" :style="(options?.invisible ? {opacity: 0} : {})">
		<div class="bordered">
			<div class="lbl" :style="(options?.labelStyle ? objectToCss(options.labelStyle) : '')">
				<span v-html="label"></span>
			</div>
			<div class="val" :style="(options?.valueStyle ? objectToCss(options.valueStyle) : '')" :data-internal-value="dataStore.state[method]?.[refName]?.internalValue">
				<span v-html="dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'label', 'dataStore',  //required
		'options',  //optional
	],
}
</script>

<style scoped>
.instrument {
	width: 85px;
}
.bordered {
	width: 100%;
}
</style>
