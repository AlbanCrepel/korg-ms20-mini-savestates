<template>
	<controller-group title="VCO Mixer">
		<knob-wrapper :knob="$store.currentState.vco1_level" />

		<knob-wrapper :knob="$store.currentState.vco2_level" />
	</controller-group>
</template>

<script>
	export default {
		name: "VcoMixer"
	}
</script>

<style scoped>

</style>
