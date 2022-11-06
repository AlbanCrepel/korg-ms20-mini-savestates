<template>
	<controller-group title="Modulation generator">
		<knob-wrapper :knob="$store.currentState.modulation_generator_wave" />

		<knob-wrapper :knob="$store.currentState.modulation_generator_freq" />
	</controller-group>
</template>

<script>
	export default {
		name: "ModulationGenerator"
	}
</script>

<style scoped>

</style>
