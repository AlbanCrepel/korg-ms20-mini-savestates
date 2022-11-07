<template>
	<ul> Presets
		<li v-for="(preset, index) in presets"><a @click="loadPreset(index)">{{ preset._file }}</a></li>
	</ul>
</template>

<script>

	import {Controller} from "../models/Controller";

	export default {
		name: "PresetList",
		data(){
			return {
				presets: []
			}
		},
		methods: {
			loadPreset(index){
				this.$store.currentState = new Controller(this.presets[index])
			}
		},
		async mounted(){
			this.presets = await queryContent().find()
		}
	}

</script>

<style scoped>

</style>
