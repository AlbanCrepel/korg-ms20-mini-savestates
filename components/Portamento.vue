<template>
	<controller-group title="Portamento">
		<knob-wrapper :knob="$store.currentState.portamento"/>
	</controller-group>
</template>

<script>
	export default {
		name: "Portamento"
	}
</script>
