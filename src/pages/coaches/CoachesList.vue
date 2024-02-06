<template>
	<section class="flex justify-center">
		<CoachFilter />
	</section>
	<section class="flex justify-center">
		<BaseCard>
			<div class="flex">
				<BaseButton primeVueButton outlined label="Refresh" class="flex-grow"> </BaseButton>
				<BaseButton link to="/register">Register As Coach</BaseButton>
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
			return this.$store.getters.coaches
		},
		hasCoaches() {
			return this.$store.getters.hasCoaches
		},
	},
	data() {
		return {
			loading: false,
		}
	},
}
</script>
