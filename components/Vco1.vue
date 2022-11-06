<template>
	<controller-group title="Voltage controlled <span class='no-wrap'>oscillator 1</span>">
		<knob-wrapper :knob="$store.currentState.vco1_wave" />

		<knob-wrapper :knob="$store.currentState.vco1_pw" />

		<knob-wrapper :knob="$store.currentState.vco1_scale" />
	</controller-group>
</template>

<script>
	export default {
		name: "Vco1"
	}
</script>

<style scoped>

</style>
