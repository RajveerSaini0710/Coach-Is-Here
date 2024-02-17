<template>
	<section class="w-full h-lvh">
		<div class="w-full h-1/2 mb-36">
			<div class="w-full h-full bg-purple-300 relative">
				<img
					src="../../assets/images/wp4327153-macbook-4k-wallpapers.jpg"
					alt="wallpaper"
					class="w-full h-full object-fill opacity-80 hover:opacity-100 transition-all duration-1000 ease-in static"
				/>
				<div class="absolute top-72 left-16 w-44 h-44">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504"
						alt="profile pic"
						class="w-full h-full object-cover rounded-full"
					/>
				</div>
			</div>
			<div class="ml-64 mt-4 flex justify-center">
				<div class="flex-grow">
					<h1 class="text-4xl font-bold text-violet-700 protest-riot-regular">Rajveer Singh Saini</h1>
					<p class="font-medium text-violet-500">Software Developer</p>
				</div>
				<div class="mr-10 mt-2">
					<i class="pi pi-user-edit text-3xl text-violet-700 cursor-pointer" @click="editData"></i>
				</div>
			</div>
		</div>
		<div></div>
	</section>
</template>

<script>
import 'primeicons/primeicons.css'
export default {
	components: {},
	data() {
		return {}
	},
	methods: {
		editData() {
			console.log('edit')
		},
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap');
.protest-riot-regular {
	font-family: 'Protest Riot', sans-serif;
	font-weight: 400;
	font-style: normal;
}
</style>
