<template>
	<div class="patch-nodes">
		<vue-flow v-if="loaded"
		          :nodes="nodes"
		          :edges="$store.currentState.patchEdges"
		          :nodes-draggable="false"
		          :zoom-on-scroll="false"
		          :zoom-on-pinch="false"
		          :zoom-on-double-click="false"
		          :pan-on-drag="false"
		          @connect="onConnect"
		          @edgesChange="onEdgesChange"/>
	</div>
</template>

<script>

	import {VueFlow} from '@vue-flow/core'
	import {PatchEdge} from "../models/PatchEdge"

	export default {
		name: "PatchNodes",
		components: {VueFlow},
		data() {
			return {
				nodes: [],
				loaded: false
			}
		},
		methods: {
			onConnect(connection) {
				this.$store.currentState.patchEdges.push(new PatchEdge(
					`${connection.source}_TO_${connection.target}`,
					connection.target,
					connection.source
				))
			},
			onEdgesChange(changes) {
				for (const change of changes) {
					if (change.type === "remove") {
						const edgeIndexToRemove = this.$store.currentState.patchEdges.findIndex(edge => edge.id === change.id)

						this.$store.currentState.patchEdges.splice(edgeIndexToRemove, 1)
					}
				}
			}
		},
		mounted() {
			window.addEventListener('load', async () => {
				await this.$nextTick()

				const patchElements = [...document.querySelectorAll(".patch")]

				for (const patchElement of patchElements) {
					const elementData = patchElement.getBoundingClientRect()
					this.nodes.push({
						id: patchElement.id,
						position: {
							x: elementData.x + elementData.width / 2,
							y: elementData.y + elementData.height / 2,
						}
					})
				}

				this.loaded = true
			})
		}
	}
</script>

<style scoped>

	.patch-nodes {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

</style>

<style>

	@import "@vue-flow/core/dist/style.css";

	.vue-flow__edge-path {
		stroke: yellow;
		stroke-width: 2px;
	}

	.vue-flow__handle {
		--size: 40px;
		width: var(--size);
		height: var(--size);
	}

</style>
