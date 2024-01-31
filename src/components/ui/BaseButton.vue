<template>
	<div class="card flex justify-center flex-wrap gap-3">
		<Button :label="label" :raised="raised" :text="text" :outlined="outlined" :icon="icon" :badge="badge" :disabled="disabled" />
	</div>
</template>

<script>
import Button from 'primevue/button'

export default {
	props: {
		disabled: { type: Boolean, default: false },
		raised: { type: Boolean, default: false },
		text: { type: Boolean, default: false },
		outlined: { type: Boolean, default: true },
		icon: { type: String },
		label: { type: String },
		badge: { type: String },
	},
	components: {
		Button,
	},
}
</script>
