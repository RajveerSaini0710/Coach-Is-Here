<template>
	<div class="inline-block" v-if="!link && !normalButton && primeVueButton">
		<Button
			:label="label"
			:raised="raised"
			:outlined="outlined"
			:icon="icon"
			:badge="badge"
			:disabled="disabled"
			:size="size"
			:severity="severity"
			:badgeClass="badgeClass"
			:loading="loading"
			class="text-purple-800 py-3 px-6 rounded-3xl mr-2 border-purple-600 hover:bg-purple-50 active:bg-purple-50"
		/>
	</div>
	<div v-else-if="!link && !primeVueButton && normalButton">
		<button
			class="py-3 px-6 bg-purple-700 border border-purple-700 text-white cursor-pointer rounded-3xl mr-2 inline-block hover:bg-purple-900 hover:border-purple-900 active:bg-purple-900 active:border-purple-900"
		>
			<slot></slot>
		</button>
	</div>
	<div v-else>
		<router-link
			class="py-3 px-6 bg-purple-700 border border-purple-700 text-white cursor-pointer rounded-3xl mr-2 inline-block hover:bg-purple-900 hover:border-purple-900 active:bg-purple-900 active:border-purple-900"
			:to="to"
		>
			<slot></slot>
		</router-link>
	</div>
</template>

<script>
import Button from 'primevue/button'

export default {
	props: {
		disabled: { type: Boolean, default: false },
		raised: { type: Boolean, default: false },
		outlined: { type: Boolean, default: true },
		loading: { type: Boolean, default: false },
		icon: { type: String },
		label: { type: String },
		badge: { type: String },
		size: { type: String },
		severity: { type: String },
		badgeClass: { type: String },
		link: { type: Boolean, default: false },
		to: { type: String, default: '/' },
		normalButton: { type: Boolean, default: false },
		primeVueButton: { type: Boolean, default: false },
	},
	components: {
		Button,
	},
}
</script>
