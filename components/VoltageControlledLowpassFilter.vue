<template>
	<controller-group title="Voltage controlled lowpass filter">
		<knob-wrapper :knob="$store.currentState.voltage_controlled_lowpass_filter_cutoff_freq"/>

		<knob-wrapper :knob="$store.currentState.voltage_controlled_lowpass_filter_peak"/>
	</controller-group>
</template>

<script>
	export default {
		name: "VoltageControlledLowpassFilter"
	}
</script>
