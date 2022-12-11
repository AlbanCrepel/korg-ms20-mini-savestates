<template>
	<controller-group title="Master tune">
		<knob-wrapper :knob="$store.currentState.master_tune"/>
	</controller-group>
</template>

<script>
	export default {
		name: "MasterTune"
	}
</script>
