<template>
	<div class="patch-item"
	     :style="{
			gridArea: `${ rowStart } / ${ columnStart} / ${ rowEnd } / ${ columnEnd }`,
			top: `${top}px`,
			left: `${left}px`
		 }">
		<div class="patch-content">
			<div class="uppercase label no-wrap" v-html="label"></div>
			<div class="patch" :id="id"></div>
		</div>
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
			},
			top: {
				type: Number,
				default: 0
			},
			left: {
				type: Number,
				default: 0
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
		position: relative;
	}

	.patch-content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.patch {
		--size: 15px;
		width: var(--size);
		height: var(--size);
		border: solid 1px white;
		border-radius: 50%;
	}

	.label {
		font-size: 0.6rem;
	}

</style>
