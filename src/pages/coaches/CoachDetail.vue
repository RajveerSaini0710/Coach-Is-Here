<template>
	<div>
		<section class="flex justify-center">
			<BaseCard>
				<h2 class="mb-4 font-bold text-xl">{{ fullName }}</h2>
				<h3 class="mb-2 font-medium text-lg">${{ rate }}/hour</h3>
			</BaseCard>
		</section>
		<section class="flex justify-center">
			<BaseCard>
				<header>
					<h2 class="md:mb-4 my-2 ml-2 md:ml-0 font-black md:text-xl">Intrested? Contact Us</h2>
					<BaseButton class="mb-2 ml-2" link :to="contactLink"> Contact </BaseButton>
				</header>
				<router-view></router-view>
			</BaseCard>
		</section>
		<section class="flex justify-center">
			<BaseCard>
				<div class="flex gap-4 mb-4">
					<BaseBadge v-for="area in areas" :label="area.toUpperCase()" :key="area" :type="area" :title="area" />
				</div>
				<p class="mb-2">{{ description }}</p>
			</BaseCard>
		</section>
	</div>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			selectedCoach: null,
		}
	},
	computed: {
		fullName() {
			return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
		},
		rate() {
			return this.selectedCoach.hourlyRate
		},
		contactLink() {
			return `${this.id}/contact`
		},
		areas() {
			return this.selectedCoach.areas
		},
		description() {
			return this.selectedCoach.description
		},
	},
	created() {
		this.selectedCoach = this.$store.getters.coaches.find((coach) => coach.id === this.id)
	},
}
</script>
