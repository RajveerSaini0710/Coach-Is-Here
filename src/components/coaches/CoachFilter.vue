<template>
	<BaseCard>
		<h2 class="mb-2 text-purple-600 font-bold md:indent-5 text-center md:text-left">Filter Your Coach</h2>
		<div class="flex justify-evenly items-center md:justify-normal">
			<div v-for="expert of expertise" :key="expert" class="text-purple-700 py-2 md:ml-4 flex flex-col items-center md:block">
				<Checkbox v-model="filters" :id="expert.id" :value="expert.name" class="mr-2" name="Expertise" @change="setFilter" />
				<label class="block md:inline-block" :for="expert.id"> {{ expert.name }} </label>
			</div>
		</div>
	</BaseCard>
</template>

<script>
import Checkbox from 'primevue/checkbox'

export default {
	emits: ['change-filter'],
	components: {
		Checkbox,
	},
	data() {
		return {
			expertise: [
				{ id: 'front', name: 'Frontend' },
				{ id: 'back', name: 'Backend' },
				{ id: 'career', name: 'Career' },
			],
			filters: [],
		}
	},
	methods: {
		setFilter(event) {
			const inputId = event.target.value
			const updateFilter = this.filters.map((filter) => {
				if (filter === inputId) {
					return filter
				}
				return filter
			})
			this.filters = updateFilter
			this.$emit('change-filter', updateFilter)
		},
	},
}
</script>
