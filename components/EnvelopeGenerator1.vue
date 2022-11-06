<template>
	<controller-group title="Envelope generator 1">
		<knob-wrapper :knob="$store.currentState.envelope_generator_1_delay" />

		<knob-wrapper :knob="$store.currentState.envelope_generator_1_attack" />

		<knob-wrapper :knob="$store.currentState.envelope_generator_1_release" />
	</controller-group>
</template>

<script>
	export default {
		name: "EnvelopeGenerator1"
	}
</script>

<style scoped>

</style>
