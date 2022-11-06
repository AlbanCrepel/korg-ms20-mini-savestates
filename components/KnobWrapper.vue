<template>
	<div class="text-center">
		<knob v-model="knob.value"
		      :min="knob.min"
		      :max="knob.max"
		      :knob-size="knob.size"
		      :circle-degree-offset="knob.circleDegreeOffset"
		      :step="knob.step" />

		<div class="uppercase condensed label text-center">{{ knob.label }}</div>
	</div>
</template>

<script>
	import {Knob} from "../models/Knob";

	export default {
		name: "KnobWrapper",
		props: {
			knob: Knob
		}
	}
</script>

<style scoped>

	.label {
		font-size: var(--font-size-small);
	}

</style>
