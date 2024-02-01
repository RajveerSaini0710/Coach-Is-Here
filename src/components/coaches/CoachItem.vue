<template>
	<li class="my-4 border border-solid border-gray-700 rounded-xl p-4">
		<h3 class="my-2 text-2xl font-semibold">{{ fullName }}</h3>
		<h4 class="my-2">${{ rate }}/hour</h4>
		<div class="my-2">
			<span v-for="area in areas" :key="area">{{ area }}</span>
		</div>
		<div class="flex justify-end my-2">
			<BaseButton outlinedLink :to="coachContactLink">Contact</BaseButton>
			<BaseButton link :to="coachDetailLink">View Details</BaseButton>
		</div>
	</li>
</template>

<script>
export default {
	props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
	computed: {
		fullName() {
			return `${this.firstName}  ${this.lastName}`
		},
		coachContactLink() {
			return `${this.$route.path}/${this.id}/contact`
		},
		coachDetailLink() {
			return `${this.$route.path}/${this.id}`
		},
	},
}
</script>
