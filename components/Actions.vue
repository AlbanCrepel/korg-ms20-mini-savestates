<template>
	<div>
		<button @click="saveCurrentState">Save</button>
	</div>
</template>

<script>
	export default {
		name: "Actions",
		methods: {
			saveCurrentState(){
				this.$store.currentState.save()
			}
		}
	}
</script>

<style scoped>

</style>
