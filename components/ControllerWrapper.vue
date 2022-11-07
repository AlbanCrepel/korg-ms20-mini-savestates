<template>
	<div class="controller-wrapper">
		<vco1 class="div1"></vco1>
		<vco2 class="div2"></vco2>
		<vco-mixer class="div3"></vco-mixer>
		<voltage-controlled-highpass-filter class="div4"></voltage-controlled-highpass-filter>
		<voltage-controlled-lowpass-filter class="div5"></voltage-controlled-lowpass-filter>
		<div class="div6"></div>
		<envelope-generator2 class="div7"></envelope-generator2>
		<patches-wrapper class="div8"></patches-wrapper>
		<portamento class="div9" :fullHeight="false"></portamento>
		<master-tune class="div10" :fullHeight="false"></master-tune>
		<freq-modulation class="div11" :fullHeight="false"></freq-modulation>
		<cutoff-frequency-modulation1 class="div12" :fullHeight="false"></cutoff-frequency-modulation1>
		<cutoff-frequency-modulation2 class="div13" :fullHeight="false"></cutoff-frequency-modulation2>
		<modulation-generator class="div14" :fullHeight="false"></modulation-generator>
		<envelope-generator-1 class="div15" :fullHeight="false"></envelope-generator-1>
		<external-signal-processor class="div16"></external-signal-processor>
	</div>
</template>

<script>


	export default {
		name: "ControllerWrapper",
	}
</script>

<style scoped lang="scss">

	.controller-wrapper {
		width: 100%;
		height: 550px;
		display: grid;
		grid-template-columns: repeat(8, 1fr) 6fr;
		grid-template-rows: repeat(12, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;

		> * {
			border: solid 1px var(--border-color);
			padding: 5px;
			display: flex;
			flex-direction: column;
		}
	}

	.div1 {
		grid-area: 1 / 1 / 10 / 2;
	}

	.div2 {
		grid-area: 1 / 2 / 10 / 3;
	}

	.div3 {
		grid-area: 1 / 3 / 7 / 4;
	}

	.div4 {
		grid-area: 1 / 4 / 7 / 5;
	}

	.div5 {
		grid-area: 1 / 5 / 7 / 6;
	}

	.div6 {
		grid-area: 1 / 6 / 6 / 8;
	}

	.div7 {
		grid-area: 1 / 8 / 13 / 9;
	}

	.div8 {
		grid-area: 1 / 9 / 8 / 10;
	}

	.div9 {
		grid-area: 10 / 1 / 13 / 2;
	}

	.div10 {
		grid-area: 10 / 2 / 13 / 3;
	}

	.div11 {
		grid-area: 7 / 3 / 13 / 4;
	}

	.div12 {
		grid-area: 7 / 4 / 13 / 5;
	}

	.div13 {
		grid-area: 7 / 5 / 13 / 6;
	}

	.div14 {
		grid-area: 6 / 6 / 13 / 7;
	}

	.div15 {
		grid-area: 6 / 7 / 13 / 8;
	}

	.div16 {
		grid-area: 8 / 9 / 13 / 10;
	}

</style>
