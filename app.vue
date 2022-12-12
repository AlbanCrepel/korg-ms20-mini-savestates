<template>
	<main>
		<div class="container">
			<controller-wrapper/>

			<patch-nodes/>
		</div>

		<div class="presets">
			<preset-list/>

			<controller-form />
		</div>
	</main>
</template>

<script setup>

	useHead({
		title: 'Korg MS20-mini savestates',
		meta: [
			{name: 'description', content: 'Create and manage Korg MS20-mini savestates'}
		],
		htmlAttrs: {
			class: 'dark'
		},
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
		]
	})

</script>

<style scoped>

	.presets {
		display: flex;
		margin: 10px;
		justify-content: space-between;
		gap: 20px;
		flex-wrap: wrap;
		margin-top: 40px;
	}

</style>
