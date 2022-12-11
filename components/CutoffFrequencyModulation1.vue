<template>
	<controller-group title="Cutoff frequency modulation">
		<knob-wrapper :knob="$store.currentState.cutoff_frequency_modulation_mg_t_ext_1"/>

		<knob-wrapper :knob="$store.currentState.cutoff_frequency_modulation_eg2_ext_1"/>
	</controller-group>
</template>

<script>
	export default {
		name: "CutoffFrequencyModulation1"
	}
</script>
