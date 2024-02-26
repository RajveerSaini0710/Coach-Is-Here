<template>
	<div class="inline-block" v-if="!link && !outlinedLink && !normalButton && !customButton && primeVueButton">
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
			class="text-purple-800 md:py-3 md:px-4 text-xs md:text-base rounded-3xl md:mr-2 border-purple-600 hover:bg-purple-50 active:bg-purple-50"
		/>
	</div>
	<div v-else-if="!link && !outlinedLink && !primeVueButton && !customButton && normalButton">
		<button
			class="py-2 px-6 md:py-3 font-bold md:px-6 text-sm md:text-base bg-purple-700 border border-purple-700 text-white cursor-pointer rounded-3xl mr-2 inline-block hover:bg-purple-900 hover:border-purple-900 active:bg-purple-900 active:border-purple-900"
		>
			<slot></slot>
		</button>
	</div>
	<div v-else-if="!link && !outlinedLink && !primeVueButton && !normalButton && customButton">
		<button :class="customClass" :disabled="disabled">
			<slot></slot>
		</button>
	</div>
	<div v-else-if="!link && !primeVueButton && !normalButton && !customButton && outlinedLink">
		<router-link
			class="flex text-purple-800 py-2 px-3 md:py-3 md:px-4 text-xs md:text-base rounded-3xl mr-2 border border-purple-600 hover:bg-purple-50 active:bg-purple-50"
			:to="to"
		>
			<slot></slot>
		</router-link>
	</div>
	<div v-else>
		<router-link
			class="py-2 px-3 md:py-3 md:px-4 text-xs md:text-base bg-purple-700 border border-purple-700 text-white cursor-pointer rounded-3xl md:mr-2 inline-block hover:bg-purple-900 hover:border-purple-900 active:bg-purple-900 active:border-purple-900"
			:link="link"
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
		customClass: { type: String },
		severity: { type: String },
		badgeClass: { type: String },
		link: { type: Boolean, default: false },
		to: { type: String, default: '/' },
		normalButton: { type: Boolean, default: false },
		primeVueButton: { type: Boolean, default: false },
		customButton: { type: Boolean, default: false },
		outlinedLink: { type: Boolean, default: false },
	},
	components: {
		Button,
	},
}
</script>
