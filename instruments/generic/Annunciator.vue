<template>
	<div :class="'instrument annunciator inline-block' + (options?.classes ? ' '+ options.classes : '')">
		<span v-html="text"
			:class="(dataStore.state[method]?.[refName]?.valueHtml ? onClass : offClass)"
			:style="(dataStore.state[method]?.[refName]?.valueHtml ? (onStyle || onClass ? onStyle : 'color: #f5f8fa' /*if no onStyle or onClass was set*/) : offStyle)"
		></span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'refName', 'text', 'onStyle', 'offStyle', 'onClass', 'offClass', 'dataStore',  //required
		'options',  //optional
	],
}
</script>

<style scoped>
.annunciator {
	color: #202729;
	display: inline-block;
	font-weight: bold;
	padding-left: 20px;
	padding-right: 20px;
}
</style>
