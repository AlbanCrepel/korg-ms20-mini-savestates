<template>
	<controller-group title="Voltage controlled highpass filter">
		<knob-wrapper :knob="$store.currentState.voltage_controlled_highpass_filter_cutoff_freq"/>

		<knob-wrapper :knob="$store.currentState.voltage_controlled_highpass_filter_peak"/>
	</controller-group>
</template>

<script>
	export default {
		name: "VoltageControlledHighpassFilter"
	}
</script>
