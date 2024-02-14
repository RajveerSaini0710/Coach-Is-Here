<template>
	<div class="card flex flex-wrap gap-2">
		<Chip
			:label="label"
			:removable="removable"
			:icon="icon"
			:image="image"
			class="bg-gray-300 text-black inline-block text-[10px] font-semibold md:font-medium md:text-sm my-2 py-2 md:px-4"
			:class="type"
		/>
	</div>
</template>

<script>
import Chip from 'primevue/chip'

export default {
	props: {
		label: { type: String, required: true, default: 'No Data' },
		removable: { type: Boolean, required: false, default: false },
		icon: { type: String, required: false, default: null },
		image: { type: String, required: false, default: null },
		type: { type: String, required: true, default: null },
	},
	components: {
		Chip,
	},
}
</script>

<style>
.frontend {
	background-color: #3d008d;
	color: white;
}

.backend {
	background-color: #71008d;
	color: white;
}

.career {
	background-color: #8d006e;
	color: white;
}
</style>
