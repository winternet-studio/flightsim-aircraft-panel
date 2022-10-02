<template>
	<div class="spacer std-height"></div>
</template>

<script>
module.exports = {
	props: [
		'options',  //optional
	],
}
</script>

<style scoped>
.spacer {
	border: 1px solid gray;
	width: 0px;
	position: relative;
	display: inline-block;
}
</style>
