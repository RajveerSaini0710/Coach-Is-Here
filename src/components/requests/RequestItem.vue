<template>
	<li class="border-2 border-gray-300 py-4 w-5/6 px-4 mb-4">
		<div class="font-bold text-purple-700 md:text-xl pb-2">
			<a :href="emailLink">{{ email }}</a>
		</div>
		<div v-if="shortMessage">
			<p class="font-medium text-xs md:text-lg inline-block">{{ shortMessage }}</p>
			<BaseButton customButton class="text-xs text-purple-700 inline-block" @click="toggleLargeMessage"
				>...Read {{ isLargeMessage ? 'More' : 'less' }}</BaseButton
			>
		</div>
		<div v-else>
			<p class="font-medium text-xs md:text-lg">{{ message }}</p>
		</div>
	</li>
</template>

<script>
export default {
	props: ['email', 'message'],
	data() {
		return {
			isLargeMessage: true,
			maxLength: 100,
		}
	},
	computed: {
		emailLink() {
			return 'mailto:' + this.email
		},
		shortMessage() {
			if (!this.isLargeMessage) {
				return this.message
			} else if (this.message.length > this.maxLength) {
				return this.message.slice(0, this.maxLength)
			}
		},
	},
	methods: {
		toggleLargeMessage() {
			this.isLargeMessage = !this.isLargeMessage
		},
	},
}
</script>
