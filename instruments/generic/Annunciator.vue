<template>
	<div :class="'instrument annunciator inline-block' + (options?.classes ? ' '+ options.classes : '')" :data-internal-value="dataStore.state[method]?.[refName]?.internalValue">
		<span v-html="dataStore.state[method]?.[refName]?.valueHtml ?? '&nbsp;'"></span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'dataStore',  //required
		'options',  //optional
	],
}
</script>

<style scoped>
</style>
