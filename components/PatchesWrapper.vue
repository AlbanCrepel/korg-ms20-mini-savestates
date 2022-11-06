<template>
	<div class="patches-wrapper">
		<patch label="total" id="total" :row-start="2" :column-start="1" :row-end="3" :column-end="2"/>
		<patch label="Freq" id="freq" :row-start="2" :column-start="3" :row-end="3" :column-end="4"/>
		<patch label="Ext signal in" id="ext_signal_in" :row-start="2" :column-start="5" :row-end="3" :column-end="6"/>
		<patch label="Cutoff freq" id="cutoff_freq_1" :row-start="2" :column-start="7" :row-end="3" :column-end="8"/>
		<patch label="Cutoff freq" id="cutoff_freq_2" :row-start="2" :column-start="9" :row-end="3" :column-end="10"/>
		<patch label="Initial gain" id="initial_gain" :row-start="2" :column-start="11" :row-end="3" :column-end="12"/>

		<patch label="Out" id="out_1" :row-start="3" :column-start="1" :row-end="4" :column-end="2"/>
		<patch label="Out" id="out_2" :row-start="3" :column-start="4" :row-end="4" :column-end="5"/>
		<patch label="Out" id="out_3" :row-start="3" :column-start="6" :row-end="4" :column-end="7"/>
		<patch label="Rev out" id="rev_out_1" :row-start="3" :column-start="12" :row-end="4" :column-end="13"/>
		<patch label="VCO 1+2" id="vco1_2" :row-start="3" :column-start="15" :row-end="4" :column-end="16"/>
		<patch label="Kbd" id="kbd" :row-start="3" :column-start="16" :row-end="4" :column-end="17"/>

		<patch label="Clock" id="clock" :row-start="4" :column-start="2" :row-end="5" :column-end="3"/>
		<patch label="Rev out" id="rev_out2" :row-start="4" :column-start="6" :row-end="5" :column-end="7"/>
		<patch label="Control" id="control" :row-start="4" :column-start="8" :row-end="5" :column-end="9"/>
		<patch label="EG1" id="eg1" :row-start="4" :column-start="10" :row-end="5" :column-end="11"/>
		<patch label="Trig in" id="trig_in" :row-start="4" :column-start="15" :row-end="5" :column-end="16"/>
		<patch label="Trig out" id="trig_out_1" :row-start="4" :column-start="16" :row-end="5" :column-end="17"/>

		<patch label="In" id="in_1" :row-start="5" :column-start="1" :row-end="6" :column-end="2"/>
		<patch label="Out" id="out_4" :row-start="5" :column-start="4" :row-end="6" :column-end="5"/>
		<patch label="In" id="in_2" :row-start="5" :column-start="6" :row-end="6" :column-end="7"/>
		<patch label="Out" id="out_5" :row-start="5" :column-start="9" :row-end="6" :column-end="10"/>
		<patch label="Black" id="black" :row-start="5" :column-start="11" :row-end="6" :column-end="12"/>
		<patch label="White" id="white" :row-start="5" :column-start="14" :row-end="6" :column-end="15"/>
		<patch id="roll" :row-start="5" :column-start="15" :row-end="6" :column-end="16"/>
		<patch id="button" :row-start="5" :column-start="16" :row-end="6" :column-end="17"/>


		<knob-wrapper :knob="$store.currentState.volume" :style="{ gridArea: '1 / 15 / 3 / 16', margin: 'auto' }" :reversed="true"/>
		<patch label="Signal out" id="signal_out" :row-start="1" :column-start="16" :row-end="2" :column-end="17"/>
		<patch label="Phones" id="phones" :row-start="2" :column-start="16" :row-end="3" :column-end="17"/>
	</div>
</template>

<script>
	export default {
		name: "PatchesWrapper"
	}
</script>

<style scoped>

	.patches-wrapper {
		display: grid !important;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.output {
		grid-area: 1 / 13 / 4 / 17;
	}

</style>
