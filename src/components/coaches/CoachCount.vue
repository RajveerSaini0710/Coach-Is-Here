<template>
	<section class="flex items-center">
		<p class="text-purple-700 font-medium">Total Coaches : {{ coachCount }}</p>
		<!-- <p class="text-purple-700 font-medium">Specialities : {{ coachSpecialties }}</p> -->
	</section>
</template>

<script>
export default {
	props: ['coachCount'],
	computed: {
		coachSpecialties() {
			let coaches = this.$store.getters.coaches
			// let activeFilters = this.activeFilter
			let areas = []
			coaches.map((coach) => {
				if (coach.areas) {
					coach.areas.map((area) => {
						if (!areas.includes(area)) {
							areas.push(area)
						}
					})
				}
			})
			return areas.join(' , ').toUpperCase()
		},
	},

	data() {
		return {}
	},
}
</script>
