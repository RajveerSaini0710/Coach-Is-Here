<template>
	<li class="my-4 border border-solid border-gray-700 rounded-xl md:p-4 p-2">
		<h3 class="md:my-2 text-xl font-bold md:text-2xl md:font-semibold">{{ fullName }}</h3>
		<h4 class="text-sm md:my-2 md:text-base font-medium">${{ rate }}/hour</h4>
		<div class="md:my-2 mb-4 flex gap-1">
			<BaseBadge v-for="(area, index) in areas" :key="index" :label="area.toUpperCase()" :type="area" />
		</div>
		<div class="flex justify-end md:my-2">
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
