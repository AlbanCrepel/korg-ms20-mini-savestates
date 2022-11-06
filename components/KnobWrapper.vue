<template>
	<div class="text-center knob-wrapper" :class="{ 'reversed': reversed }">
		<knob v-model="knob.value"
		      :min="knob.min"
		      :max="knob.max"
		      :knob-size="knob.size"
		      :circle-degree-offset="knob.circleDegreeOffset"
		      :step="knob.step"/>

		<div class="uppercase condensed label text-center" v-html="knob.label"></div>
	</div>
</template>

<script>
	import {Knob} from "../models/Knob";

	export default {
		name: "KnobWrapper",
		props: {
			knob: Knob,
			reversed: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">

	.knob-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		&.reversed {
			flex-direction: column-reverse;
		}
	}

	.label {
		font-size: var(--font-size-small);
		margin-top: -10px;
	}

</style>
