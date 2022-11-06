<template>
	<controller-group title="Voltage controlled <span class='no-wrap'>oscillator 2</span>">
		<knob-wrapper :knob="$store.currentState.vco2_wave" />

		<knob-wrapper :knob="$store.currentState.vco2_pitch" />

		<knob-wrapper :knob="$store.currentState.vco2_scale" />
	</controller-group>
</template>

<script>
	export default {
		name: "Vco2"
	}
</script>

<style scoped>

</style>
