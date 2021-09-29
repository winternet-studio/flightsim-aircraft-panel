<template>
	<div :class="'annunciator' + (options?.classes ? ' '+ options.classes : '')" :data-internal-value="dataStore.state[method]?.[functionRef]?.internalValue">
		<span v-html="dataStore.state[method]?.[functionRef]?.valueHtml ?? '&nbsp;'"></span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'dataStore',  //required
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
