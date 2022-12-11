<template>
	<controller-group title="External signal processor">
		<div class="external-signal-processor">
			<div class="patches-wrapper">
				<patch label="Signal in" id="signal_in" :row-start="1" :column-start="1" :row-end="2" :column-end="2"/>
				<patch label="Out" id="out_6" :row-start="1" :column-start="4" :row-end="2" :column-end="5"/>
				<patch label="Out" id="out_7" :row-start="1" :column-start="4" :row-end="2" :column-end="5"/>
				<patch label="Out" id="out_8" :row-start="1" :column-start="7" :row-end="2" :column-end="8"/>
				<patch label="CV out" id="cv_out" :row-start="1" :column-start="10" :row-end="2" :column-end="11"/>
				<patch label="Env out" id="env_out" :row-start="1" :column-start="14" :row-end="2" :column-end="15"/>
				<patch label="Trig out" id="trig_out_2" :row-start="1" :column-start="16" :row-end="2" :column-end="17"/>
			</div>

			<div class="flex-row">
				<knob-wrapper :knob="$store.currentState.external_signal_processor_signal" />

				<knob-wrapper :knob="$store.currentState.external_signal_processor_low_cut_freq" />

				<knob-wrapper :knob="$store.currentState.external_signal_processor_high_cut_freq" />

				<knob-wrapper :knob="$store.currentState.external_signal_processor_cv_adjust" />

				<knob-wrapper :knob="$store.currentState.external_signal_processor_threshold" />
			</div>
		</div>
	</controller-group>
</template>

<script>
	export default {
		name: "ExternalSignalProcessor"
	}
</script>

<style scoped>

	.external-signal-processor {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		margin-top: 40px;
	}

	.patches-wrapper {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(1, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		padding: 10px;
	}

	.flex-row {
		display: flex;
		/*justify-content: space-between;*/
	}

</style>
