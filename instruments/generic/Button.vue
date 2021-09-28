<template>
	<div @click="eventHandlers.singleClick(method, functionRef, undefined, clickOptions)" :class="'indic clickable' + (clickOptions?.INOPERABLE ? ' INOPERABLE' : '')">
		<div class="lbl">{{ label }}</div>
	</div>
</template>

<script>
module.exports = {
	props: [
		'method', 'functionRef', 'label', 'eventHandlers',  //required
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
