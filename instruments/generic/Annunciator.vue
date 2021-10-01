<template>
	<div :class="'instrument annunciator inline-block' + (options?.classes ? ' '+ options.classes : '')" :data-internal-value="dataStore.state[method]?.[action]?.internalValue">
		<span v-html="dataStore.state[method]?.[action]?.valueHtml ?? '&nbsp;'"></span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'action', 'dataStore',  //required
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
