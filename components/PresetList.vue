<template>
	<div class="monospace presets-wrapper">
		<h2 class="title">Presets</h2>
		<ul class="preset-list">
			<li v-for="(preset, index) in presets" class="preset-item">
				<a @click="loadPreset(index)" class="preset-link">{{ preset._file }}</a>
			</li>
		</ul>
	</div>
</template>

<script>

	import {Controller} from "../models/Controller"

	export default {
		name: "PresetList",
		data() {
			return {
				presets: []
			}
		},
		methods: {
			loadPreset(index) {
				this.$store.currentState = new Controller(this.presets[index])
			}
		},
		async mounted() {
			this.presets = await queryContent().find()
		}
	}

</script>

<style scoped lang="scss">

	.presets-wrapper {
		background-color: var(--lighter-background);
		padding: 10px;
		border-radius: 4px;
	}

	.title {
		font-weight: 900;
		margin-bottom: 10px;
	}

	.preset-list {
		padding-left: 20px;
		column-count: 2;
	}

	.preset-item {
		margin-bottom: 10px;
	}

	.preset-link {
		cursor: pointer;
	}

</style>
