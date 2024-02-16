<template>
	<section class="flex flex-col items-start">
		<p class="text-purple-700 text-xs md:text-base font-medium">Total Coaches : {{ coachCount }}</p>
		<p class="text-purple-700 text-xs md:text-base font-medium">Specialities : {{ coachSpecialties }}</p>
	</section>
</template>

<script>
export default {
	props: ['coachCount', 'coachActiveFilter'],
	computed: {
		coachSpecialties() {
			let specialties = this.coachActiveFilter
			let activeSpecialties = Object.keys(specialties).filter((key) => specialties[key])
			return activeSpecialties.join(', ')
		},
	},

	data() {
		return {}
	},
}
</script>
