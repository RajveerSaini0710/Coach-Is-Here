<template>
	<section>
		<div>
			<BaseButton type="button" label="Emails" size="small" badge="8" badgeClass="text-black" outlined />
			<router-link to="/register">Register As Coach</router-link>
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
	</section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseButton from '../../components/ui/baseButton.vue'
export default {
	components: {
		CoachItem,
		BaseButton,
	},

	computed: {
		filteredCoaches() {
			return this.$store.getters.coaches
		},
		hasCoaches() {
			return this.$store.getters.hasCoaches
		},
	},
}
</script>
