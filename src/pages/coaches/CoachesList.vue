<template>
	<div>
		<section class="flex justify-center">
			<CoachFilter @change-filter="setFilter" />
		</section>

		<section class="flex justify-center">
			<BaseCard>
				<div class="flex justify-between">
					<BaseButton v-if="screenWidth > 500" primeVueButton outlined label="Refresh" @click="loadCoaches(true)"> </BaseButton>
					<BaseButton
						v-else
						customButton
						class="py-2 px-3 md:py-3 md:px-4 text-xs font-bold border border-purple-700 text-purple-700 cursor-pointer rounded-xl hover:bg-purple-50"
						@click="loadCoaches(true)"
					>
						Refresh
					</BaseButton>

					<CoachCount
						v-if="screenWidth > 500"
						class="flex-grow ml-2"
						:coachCount="filteredCoaches.length"
						:coachActiveFilter="activeFilter"
					/>
					<BaseButton v-if="isLoggedIn && !isCoach && !isDataLoaded" link to="/register">Register As Coach</BaseButton>
				</div>
				<CoachCount
					v-if="screenWidth < 500"
					class="mt-2 ml-2"
					:coachCount="filteredCoaches.length"
					:coachActiveFilter="activeFilter"
				/>

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
				<h3 v-else class="mt-6 mb-2 indent-1 text-red-500 text-sm">No Coaches Found</h3>
			</BaseCard>
		</section>
	</div>
</template>

<script>
import CoachCount from '@/components/coaches/CoachCount.vue'
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import CoachItem from '@/components/coaches/CoachItem.vue'

export default {
	components: {
		CoachItem,
		CoachFilter,
		CoachCount,
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
			screenWidth: 0,
		}
	},
	mounted() {
		this.updateScreenSize()
		window.addEventListener('resize', this.updateScreenSize)
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateScreenSize)
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
		updateScreenSize() {
			this.screenWidth = window.innerWidth
		},
	},
}
</script>
