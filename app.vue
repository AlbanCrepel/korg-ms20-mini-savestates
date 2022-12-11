<template>
	<main>
		<div class="container">
			<controller-wrapper/>

			<patch-nodes/>
		</div>

		<actions/>

		<preset-list/>
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
		}
	})

</script>
