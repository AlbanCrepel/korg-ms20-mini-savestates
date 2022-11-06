<template>
	<div class="patch-item" :style="{ gridArea: `${ rowStart } / ${ columnStart} / ${ rowEnd } / ${ columnEnd }`}">
		<div class="uppercase label no-wrap" v-html="label"></div>
		<div class="patch"></div>
	</div>
</template>

<script>
	export default {
		name: "Patch",
		props: {
			label: {
				type: String,
				default: "&nbsp;"
			},
			id: {
				type: String,
				required: true
			},
			rowStart: {
				type: Number
			},
			columnStart: {
				type: Number
			},
			rowEnd: {
				type: Number
			},
			columnEnd: {
				type: Number
			}
		}
	}
</script>

<style scoped>

	.patch-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.patch {
		--size: 15px;
		width: var(--size);
		height: var(--size);
		border: solid 1px var(--border-color);
		border-radius: 50%;
	}

	.label {
		font-size: 0.6rem;
	}

</style>
