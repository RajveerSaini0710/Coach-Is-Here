<template>
	<div></div>
	<div></div>
	<section class="flex justify-center">
		<BaseCard class="flex justify-center items-center flex-col">
			<header class="text-purple-700 text-2xl font-bold mb-6">Request Received</header>
			<BaseSpinner v-if="isDataLoaded"></BaseSpinner>
			<ul v-else-if="hasRequests" class="w-full flex justify-center items-center flex-col">
				<requestItem
					v-for="request in receivedRequest"
					:key="request.id"
					:email="request.userEmail"
					:message="request.message"
				></requestItem>
			</ul>
			<h3 v-else class="text-lg font-medium mb-4">You haven't received any request yet!</h3>
		</BaseCard>
	</section>
</template>

<script>
import requestItem from '../../components/requests/requestItem.vue'
export default {
	data() {
		return {
			isDataLoaded: false,
		}
	},
	components: {
		requestItem,
	},
	computed: {
		receivedRequest() {
			return this.$store.getters.requests
		},
		hasRequests() {
			return !this.isDataLoaded && this.$store.getters.hasRequests
		},
	},
	created() {
		this.loadRequest()
	},
	methods: {
		async loadRequest() {
			this.isDataLoaded = true
			await this.$store.dispatch('fetchRequest')
			this.isDataLoaded = false
		},
	},
}
</script>
