<template>
	<div class="controller-form">
		<h2 class="monospace">Current preset</h2>
		<input type="text" v-model="$store.currentState.patchTitle" placeholder="Title" />
		<textarea v-model="$store.currentState.description" placeholder="Description" />
		<button @click="saveCurrentState" class="monospace">save</button>
	</div>
</template>

<script>
	export default {
		name: "ControllerForm",
		methods: {
			saveCurrentState() {
				this.$store.currentState.save()
			}
		}
	}
</script>

<style scoped lang="scss">

	.controller-form {
		flex: 1;

		> * + * {
			margin-top: 10px;
		}

		input, textarea {
			appearance: none;
			outline: 0;
			border: solid 1px var(--border-color);
			border-radius: 6px;
			padding: 10px;
			font-size: 1rem;
			background-color: var(--lighter-background);
			width: 100%;
			color: white;
			font-family: var(--font-family)
		}

		textarea {
			resize: vertical;
		}

		button {
			appearance: none;
			border: none;
			outline: none;
			background-color: var(--secondary-color);
			font-weight: 900;
			color: white;
			padding: 10px 15px;
			letter-spacing: 1px;
			cursor: pointer;
			border-radius: 2px;
			font-size: var(--font-size-big)
		}
	}

</style>
