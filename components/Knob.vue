<template>
	<div class="knob" ref="knob">
		<div class="virtual-knob-container">
			<div class="value">{{ modelValue }}</div>
			<div class="virtual-thumb"></div>
			<input class="knob-slider" type="range" :step="step" :min="min" :max="max" :value="modelValue"
			       @input="emitValue"/>
		</div>
		<span v-for="(item, index) in range"
		      class="label"
		      :style="{ transform: `translate(calc(${ computeLabelPosition(index).x }px - 50%),calc(${ computeLabelPosition(index).y }px - 50%))`}">
			{{ item }}
		</span>
	</div>
</template>

<script>

	const roundNumber = (x) => Math.round((x + Number.EPSILON) * 100) / 100

	export default {
		name: "Knob",
		emits: ["update:modelValue"],
		props: {
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number
			},
			step: {
				type: Number,
				default: 1
			},
			modelValue: {
				type: Number,
				default: 0
			},
			circleDegreeOffset: {
				type: Number,
				default: 60
			},
			labelsPadding: {
				type: Number,
				default: 20
			},
			knobSize: {
				type: Number,
				default: 100
			}
		},
		computed: {
			range() {
				return Array(this.max - this.min + 1).fill().map((_, idx) => this.min + idx)
			},
			stepsCount() {
				return this.max - this.min
			},
			virtualThumbRotation() {
				const normalizedModelValue = this.modelValue + this.min * -1 // We want our value to start at 0
				return `${this.getCircleDegreeByValue(normalizedModelValue)}deg`
			}
		},
		methods: {
			getCircleDegreeByValue(value) {
				return ((360 - this.circleDegreeOffset * 2) / this.stepsCount) * value + this.circleDegreeOffset
			},
			computeLabelPosition(labelIndex) {
				const radius = this.knobSize / 2

				return {
					x: roundNumber(-1 * ((radius + this.labelsPadding / 2) * Math.sin(Math.PI * 2 * this.getCircleDegreeByValue(labelIndex) / 360))),
					y: roundNumber((radius + this.labelsPadding / 2) * Math.cos(Math.PI * 2 * this.getCircleDegreeByValue(labelIndex) / 360))
				}
			},
			emitValue(e) {
				this.$emit("update:modelValue", parseFloat(e.target.value))
			}
		}
	}
</script>

<style scoped lang="scss">

	.knob {
		position: relative;
		display: inline-block;
		padding: calc(v-bind(labelsPadding) * 1px);
		box-sizing: content-box;
		z-index: 10;
	}

	.virtual-knob-container {
		--knob-border-color: var(--border-color);
		--knob-label-color: white;
		width: calc(v-bind(knobSize) * 1px);
		height: calc(v-bind(knobSize) * 1px);
		border: solid 1px var(--knob-border-color);
		background-color: var(--lighter-background);
		border-radius: 50%;
		position: relative;
		box-sizing: border-box;
	}

	.value {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: var(--font-size-small);
		opacity: 0;
		transition: opacity .2s ease-out;
	}

	.knob:hover .value {
		opacity: 1;
	}

	.label {
		color: var(--knob-label-color);
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 0.6rem;
	}

	.virtual-thumb {
		--size: 8px;
		width: var(--size);
		height: var(--size);
		background-color: var(--highlight-color);
		border-radius: 50%;
		position: absolute;
		left: calc(50% - var(--size) / 2);
		bottom: calc(-1 * var(--size) / 2 - 1px);
		transform-origin: calc(var(--size) / 2) calc(-1 * calc(v-bind(knobSize) * 1px / 2) + var(--size) / 2);
		transform: rotateZ(v-bind(virtualThumbRotation));
		transition: transform 0.5s cubic-bezier(0.190, 1.000, 0.220, 1.000); /* easeOutExpo */
	}

	.knob-slider {
		--offset: 40px;
		appearance: none;
		outline: none;
		opacity: 0;
		cursor: pointer;
		width: calc(100% + var(--offset));
		height: calc(100% + var(--offset));
		transform-origin: center center;
		transform: rotateZ(-90deg) translate(25%, -50%);
		position: absolute;
	}

	.knob-slider-thumb {
		--size: 25px;
		width: var(--size);
		height: var(--size);
		background: red;
		cursor: pointer;
	}

	.knob-slider::-webkit-slider-thumb {
		@extend .knob-slider-thumb;
	}

	.knob-slider::-moz-range-thumb {
		@extend .knob-slider-thumb;
	}

</style>
