<template>
	<section class="flex justify-center">
		<CoachFilter @change-filter="setFilter" />
	</section>
	<section class="flex justify-center">
		<BaseCard>
			<div class="flex">
				<BaseButton primeVueButton outlined label="Refresh" class="flex-grow"> </BaseButton>
				<BaseButton v-if="!isCoach" link to="/register">Register As Coach</BaseButton>
			</div>
			<ul v-if="hasCoaches">
				<CoachItem
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="coach.areas"
				/>
			</ul>
			<h3 v-else>No Coaches Found</h3>
		</BaseCard>
	</section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'

export default {
	components: {
		CoachItem,
		CoachFilter,
	},

	computed: {
		filteredCoaches() {
			const coaches = this.$store.getters.coaches
			console.log(coaches)
			return coaches.filter((coach) => {
				return (
					(this.activeFilter.Frontend && coach.areas.includes('frontend')) ||
					(this.activeFilter.Backend && coach.areas.includes('backend')) ||
					(this.activeFilter.Career && coach.areas.includes('career'))
				)
			})
		},
		hasCoaches() {
			return this.$store.getters.hasCoaches
		},
		isCoach() {
			return this.$store.getters.isCoach
		},
	},
	data() {
		return {
			activeFilter: {
				Frontend: true,
				Backend: true,
				Career: true,
			},
		}
	},
	methods: {
		setFilter(updateFilter) {
			const newFilter = {
				Frontend: updateFilter.includes('Frontend'),
				Backend: updateFilter.includes('Backend'),
				Career: updateFilter.includes('Career'),
			}
			this.activeFilter = newFilter
		},
	},
}
</script>
