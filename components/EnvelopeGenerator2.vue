<template>
	<controller-group title="Envelope generator 2">
		<knob-wrapper :knob="$store.currentState.envelope_generator_2_hold"/>

		<knob-wrapper :knob="$store.currentState.envelope_generator_2_attack"/>

		<knob-wrapper :knob="$store.currentState.envelope_generator_2_decay"/>

		<knob-wrapper :knob="$store.currentState.envelope_generator_2_sustain"/>

		<knob-wrapper :knob="$store.currentState.envelope_generator_2_release"/>
	</controller-group>
</template>

<script>
	export default {
		name: "EnvelopeGenerator2"
	}
</script>
