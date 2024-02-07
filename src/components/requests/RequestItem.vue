<template>
	<li class="border-2 border-gray-300 py-4 w-5/6 px-4 mb-4">
		<div class="font-bold text-purple-700 text-xl pb-2">
			<a :href="emailLink">{{ email }}</a>
		</div>
		<p class="font-medium">{{ message }}</p>
	</li>
</template>

<script>
export default {
	props: ['email', 'message'],
	computed: {
		emailLink() {
			return 'mailto:' + this.email
		},
	},
}
</script>
