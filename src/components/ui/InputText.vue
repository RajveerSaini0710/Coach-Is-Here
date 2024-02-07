<template>
	<div class="flex flex-col gap-1">
		<label :for="label" class="text-purple-600">{{ label }}</label>
		<InputText
			type="text"
			:id="label"
			v-model="value"
			:size="size"
			class="w-full border border-purple-200 focus:ring-transparent focus:border-purple-500"
			:placeholder="placeholder"
			@input="$emit('update:modelValue', $event.target.value)"
			:errorMessage="errorMessage"
		/>
		<InlineMessage class="text-xs text-red-600">{{ errorMessage }}</InlineMessage>
	</div>
</template>

<script>
import InputText from 'primevue/inputtext'
import InlineMessage from 'primevue/inlinemessage'

export default {
	components: {
		InputText,
	},
	props: {
		modelValue: {
			type: String,
			required: true,
			default: null,
		},
		label: {
			type: String,
			required: true,
			default: null,
		},
		size: {
			type: String,
			required: false,
		},
		customClass: {
			type: String,
			required: false,
		},
		placeholder: {
			type: String,
			required: false,
		},
		errorMessage: {
			type: String,
			required: false,
		},
	},
	emits: ['update:modelValue'],
	computed: {
		value: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			},
		},
	},
}
</script>
