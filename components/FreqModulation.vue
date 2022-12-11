<template>
	<controller-group title="Frequency modulation">
		<knob-wrapper :knob="$store.currentState.freq_modulation_mg_t_ext"/>

		<knob-wrapper :knob="$store.currentState.freq_modulation_egt_ext"/>
	</controller-group>
</template>

<script>
	export default {
		name: "FreqModulation"
	}
</script>
