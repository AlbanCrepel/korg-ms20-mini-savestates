<template>
	<div class="patches-wrapper">
		<patch label="total" id="total" :row-start="2" :column-start="1" :row-end="3" :column-end="2"/>
		<patch label="Freq" id="freq" :row-start="2" :column-start="2" :row-end="3" :column-end="3" :left="20"/>
		<patch label="Ext signal in" id="ext_signal_in" :row-start="2" :column-start="3" :row-end="3" :column-end="4" :left="30"/>
		<patch label="Cutoff freq" id="cutoff_freq_1" :row-start="2" :column-start="5" :row-end="3" :column-end="6" :left="-10" />
		<patch label="Cutoff freq" id="cutoff_freq_2" :row-start="2" :column-start="6" :row-end="3" :column-end="7"/>
		<patch label="Initial gain" id="initial_gain" :row-start="2" :column-start="7" :row-end="3" :column-end="8"/>

		<patch label="Out" id="out_1" :row-start="3" :column-start="1" :row-end="4" :column-end="2"/>
		<patch label="Out" id="out_2" :row-start="3" :column-start="3" :row-end="4" :column-end="4"/>
		<patch label="Out" id="out_3" :row-start="3" :column-start="4" :row-end="4" :column-end="5"/>
		<patch label="Rev out" id="rev_out_1" :row-start="3" :column-start="7" :row-end="4" :column-end="8" :left="40"/>
		<patch label="VCO 2" id="vco_2" :row-start="3" :column-start="8" :row-end="4" :column-end="9" :top="30" :left="20"/>
		<patch label="VCO 1+2" id="vco1_2" :row-start="3" :column-start="9" :row-end="4" :column-end="10"/>
		<patch label="Kbd" id="kbd" :row-start="3" :column-start="10" :row-end="4" :column-end="11"/>

		<patch label="Clock" id="clock" :row-start="4" :column-start="2" :row-end="5" :column-end="3"/>
		<patch label="Rev out" id="rev_out2" :row-start="4" :column-start="4" :row-end="5" :column-end="5"/>
		<patch label="Control" id="control" :row-start="4" :column-start="5" :row-end="5" :column-end="6"/>
		<patch label="EG1" id="eg1" :row-start="4" :column-start="6" :row-end="5" :column-end="7" :left="40"/>
		<patch label="Trig in" id="trig_in" :row-start="4" :column-start="9" :row-end="5" :column-end="10"/>
		<patch label="Trig out" id="trig_out_1" :row-start="4" :column-start="10" :row-end="5" :column-end="11"/>

		<patch label="In" id="in_1" :row-start="5" :column-start="1" :row-end="6" :column-end="2"/>
		<patch label="Out" id="out_4" :row-start="5" :column-start="3" :row-end="6" :column-end="4"/>
		<patch label="In" id="in_2" :row-start="5" :column-start="4" :row-end="6" :column-end="5"/>
		<patch label="Out" id="out_5" :row-start="5" :column-start="5" :row-end="6" :column-end="6" :left="40"/>
		<patch label="Pink" id="pink" :row-start="5" :column-start="6" :row-end="6" :column-end="7" :left="40"/>
		<patch label="White" id="white" :row-start="5" :column-start="8" :row-end="6" :column-end="9"/>
		<patch label="Wheel" id="roll" :row-start="5" :column-start="9" :row-end="6" :column-end="10"/>
		<patch label="Button" id="button" :row-start="5" :column-start="10" :row-end="6" :column-end="11"/>


		<knob-wrapper :knob="$store.currentState.volume" :style="{ gridArea: '1 / 8 / 3 / 10', margin: 'auto', marginTop: '23px' }" :reversed="true"/>
		<patch label="Signal out" id="signal_out" :row-start="1" :column-start="10" :row-end="2" :column-end="11"/>
		<patch label="Phones" id="phones" :row-start="2" :column-start="10" :row-end="3" :column-end="11"/>
	</div>
</template>

<script>
	export default {
		name: "PatchesWrapper"
	}
</script>

<style scoped lang="scss">

	.patches-wrapper {
		display: grid !important;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		padding: 10px !important;

		> * {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

</style>
