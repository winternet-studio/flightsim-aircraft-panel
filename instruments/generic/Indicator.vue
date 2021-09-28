<template>
	<div :class="'indic'+ (options?.INOPERABLE ? ' INOPERABLE' : '')" :style="(options?.invisible ? {opacity: 0} : {})">
		<div class="lbl">{{ label }}</div>
		<div class="val" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue"><span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span></div>
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
