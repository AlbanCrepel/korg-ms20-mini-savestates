<template>
	<controller-group title="Cutoff frequency modulation">
		<knob-wrapper :knob="$store.currentState.cutoff_frequency_modulation_mg_t_ext_2" />

		<knob-wrapper :knob="$store.currentState.cutoff_frequency_modulation_eg2_ext_2" />
	</controller-group>
</template>

<script>
	export default {
		name: "CutoffFrequencyModulation2"
	}
</script>

<style scoped>

</style>
