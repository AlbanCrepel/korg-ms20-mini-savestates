<template>
	<div>
		<h2 class="uppercase title condensed" v-html="title"></h2>

		<div class="knobs" :class="{ 'full-height': fullHeight }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ControllerGroup",
		props: {
			title: {
				type: String
			},
			fullHeight: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped lang="scss">

	.title {
		font-weight: 200;
		font-size: var(--font-size-big);
		margin-bottom: 10px;
	}

	.knobs {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 20px;
		height: 100%;

		&.full-height :deep( > *) {
			flex: 1
		}
	}

</style>
