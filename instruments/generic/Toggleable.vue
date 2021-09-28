<template>
	<div @click="eventHandlers.singleClick(method, functionRef, dataStore.state[method]?.[functionRef]?.internalValue, clickOptions)" :class="'indic toggleable' + (clickOptions?.INOPERABLE ? ' INOPERABLE' : '') + (clickOptions?.defectWrite ? ' defectwrite' : '')">
		<div class="lbl"><span v-html="label"></span></div>
		<div class="val" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue"><span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span></div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'label', 'dataStore', 'eventHandlers',  //required
		'clickOptions',  //optional
	],
}
</script>

<style scoped>
p.example-css {
	font-size: 2em;
	text-align: center;
}
</style>
