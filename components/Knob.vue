<template>
	<div>
		<div class="virtual-knob-container">
			<div class="virtual-thumb"></div>
			<input class="knob" type="range" :step="step" :min="min" :max="max" v-model.number="modelValue" />
			<span v-for="(item, index) in range"
			      class="label"
			      :style="{ transform: `translate(calc(${ computeLabelPosition(index).x }px + 100%),calc(${ computeLabelPosition(index).y }px - 100%))`}">{{ item }}</span>
		</div>
		{{ modelValue }}
	</div>
</template>

<script>
	export default {
		name: "Knob",
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
			}
		},
		computed: {
			range(){
				return Array(this.max - this.min + 1).fill().map((_, idx) => this.min + idx)
			},
			stepsCount(){
				return this.max - this.min
			},
			virtualThumbRotation(){
				const normalizedModelValue = this.modelValue + this.min * -1 // We want our value to start at 0
				return `${this.getCircleDegreeByValue(normalizedModelValue)}deg`
			}
		},
		methods: {
			getCircleDegreeByValue(value){
				return ((360 - this.circleDegreeOffset * 2)  / this.stepsCount) * value + this.circleDegreeOffset
			},
			computeLabelPosition(labelIndex){
				const radius = 100

				return {
					x: -1 * radius * Math.sin(Math.PI * 2 * this.getCircleDegreeByValue(labelIndex) / 360) + 180,
					y: radius * Math.cos(Math.PI * 2 * this.getCircleDegreeByValue(labelIndex) / 360)
				}
			}
		}
	}
</script>

<style scoped lang="scss">

	.virtual-knob-container {
		--knob-border-color: gray;
		--knob-label-color: white;
		--radius: 100px;
		width: calc(2 * var(--radius));
		height: calc(2 * var(--radius));
		border: solid 1px var(--knob-border-color);
		border-radius: 50%;
		position: relative;
		box-sizing: border-box;
	}

	.label {
		color: var(--knob-label-color);
		display: inline-block;
		position: absolute;
		top: 50%;
		left: -50%;
	}

	.virtual-thumb {
		--size: 10px;
		width: var(--size);
		height: var(--size);
		background-color: red;
		border-radius: 50%;
		position: absolute;
		left: calc(50% - var(--size) / 2);
		bottom: calc(-1 * var(--size) / 2 - 1px);
		transform-origin: calc(var(--size) / 2) calc(-1 * var(--radius) + var(--size) / 2);
		transform: rotateZ(v-bind(virtualThumbRotation));
		transition: transform 0.5s cubic-bezier(0.190, 1.000, 0.220, 1.000); /* easeOutExpo */
	}

	.knob {
		appearance: none;
		width: 100%; /* Full-width */
		height: 100%; /* Specified height */
		background: #d3d3d3; /* Grey background */
		outline: none; /* Remove outline */
		opacity: 0; /* Set transparency (for mouse-over effects on hover) */
		cursor: pointer;
		/*transition: opacity .2s;*/
	}

	/* Mouse-over effects */
	.knob:hover {
		/*opacity: 1;*/ /* Fully shown on mouse-over */
	}

	/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
	.knob::-webkit-slider-thumb {
		appearance: none;
		width: 25px; /* Set a specific slider handle width */
		height: 25px; /* Slider handle height */
		background: red;
		cursor: pointer; /* Cursor on hover */
	}

	.knob::-moz-range-thumb {
		width: 25px; /* Set a specific slider handle width */
		height: 25px; /* Slider handle height */
		background: red;
		cursor: pointer; /* Cursor on hover */
	}

</style>
