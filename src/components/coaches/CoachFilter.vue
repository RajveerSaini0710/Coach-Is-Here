<template>
	<BaseCard>
		<h2 class="mb-2 text-purple-600 font-semibold indent-4">Find Your Coach</h2>
		<div class="flex">
			<div v-for="expert of expertise" :key="expert.id" class="text-purple-700 py-2 ml-4">
				<Checkbox v-model="filters" :id="expert.id" :value="expert.name" class="mr-2" name="Expertise" @change="setFilter" />
				<label :for="expert.id">{{ expert.name }}</label>
			</div>
		</div>
	</BaseCard>
</template>

<script>
import Checkbox from 'primevue/checkbox'

export default {
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
			filters: ['Frontend', 'Backend', 'Career'],
		}
	},
	methods: {
		setFilter(event) {
			const inputId = event.target.value
			const isActive = event.target.checked
			console.log('id', inputId)
			console.log('active', isActive)
		},
	},
}
</script>
