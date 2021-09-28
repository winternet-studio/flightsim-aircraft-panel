<template>
	<div class="spacer"></div>
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
	height: 30px;
	width: 0px;
	top: 4px;
	position: relative;
	display: inline-block;
}
</style>
