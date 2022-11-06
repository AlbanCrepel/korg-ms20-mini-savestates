<template>
	<main>
		<controller-wrapper/>

		<knob :min="0" :max="4" :step="1"/>

		<knob :min="-5" :max="5" :step="0.1"/>

		<knob :min="4" :max="9" :step="0.1"/>
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
