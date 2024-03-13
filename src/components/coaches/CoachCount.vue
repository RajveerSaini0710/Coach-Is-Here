<template></template>

<script>
export default {
	props: ['coachCount', 'coachActiveFilter', 'remainingCoachesCount'],
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
