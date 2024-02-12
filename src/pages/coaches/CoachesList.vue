<template>
	<div>
		<section class="flex justify-center">
			<CoachFilter @change-filter="setFilter" />
		</section>
		<section class="flex justify-center">
			<BaseCard>
				<div class="flex">
					<BaseButton primeVueButton outlined label="Refresh" class="flex-grow" @click="loadCoaches(true)"> </BaseButton>
					<BaseButton v-if="isLoggedIn && !isCoach && !isDataLoaded" link to="/register">Register As Coach</BaseButton>
				</div>

				<div v-if="isDataLoaded">
					<BaseSpinner></BaseSpinner>
				</div>
				<ul v-else-if="hasCoaches">
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
	</div>
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
		isLoggedIn() {
			return this.$store.getters.isAuthenticated
		},
		filteredCoaches() {
			const coaches = this.$store.getters.coaches
			return coaches.filter((coach) => {
				return (
					(this.activeFilter.Frontend && coach.areas.includes('frontend')) ||
					(this.activeFilter.Backend && coach.areas.includes('backend')) ||
					(this.activeFilter.Career && coach.areas.includes('career'))
				)
			})
		},
		hasCoaches() {
			return !this.isDataLoaded && this.$store.getters.hasCoaches
		},
		isCoach() {
			return this.$store.getters.isCoach
		},
		isError() {
			const error = this.$store.getters.showError
			this.error = error
			return this.$store.getters.showError
		},
	},
	data() {
		return {
			error: null,
			isDataLoaded: false,
			activeFilter: {
				Frontend: true,
				Backend: true,
				Career: true,
			},
		}
	},
	created() {
		this.loadCoaches()
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
		async loadCoaches(refresh = false) {
			this.isDataLoaded = true
			await this.$store.dispatch('loadCoaches', { forceRefresh: refresh })
			this.isDataLoaded = false
		},
	},
}
</script>
