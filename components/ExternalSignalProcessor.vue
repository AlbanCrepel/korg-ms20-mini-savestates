<template>
	<controller-group title="External signal processor">

		<div class="flex-row">
			<knob-wrapper :knob="$store.currentState.external_signal_processor_signal" />

			<knob-wrapper :knob="$store.currentState.external_signal_processor_low_cut_freq" />

			<knob-wrapper :knob="$store.currentState.external_signal_processor_high_cut_freq" />

			<knob-wrapper :knob="$store.currentState.external_signal_processor_cv_adjust" />

			<knob-wrapper :knob="$store.currentState.external_signal_processor_threshold" />
		</div>
	</controller-group>
</template>

<script>
	export default {
		name: "ExternalSignalProcessor"
	}
</script>

<style scoped>

	.flex-row {
		display: flex;
		justify-content: space-between;
	}

</style>
