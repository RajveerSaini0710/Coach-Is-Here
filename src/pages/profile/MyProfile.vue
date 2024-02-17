<template>
	<section class="w-full h-svh">
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
					<p class="font-medium text-violet-500 mb-3">Software Developer</p>
					<p class="font-light text-violet-500">
						<span class="mr-6 cursor-pointer"><i class="pi pi-google"> @rajveerssingh</i></span>
						<span class="mr-6"><i class="pi pi-phone"> +91 8928333827</i></span>
						<span class="mr-6"><i class="pi pi-home"> B-601, Twins Tower</i></span>
					</p>
				</div>
				<div class="mr-10 mt-2">
					<i class="pi pi-user-edit text-3xl text-violet-700 cursor-pointer" @click="editData"></i>
				</div>
			</div>
		</div>
		<div class="flex justify-evenly">
			<div class="border p-4 rounded-lg w-1/4">
				<p class="font-bold text-lg text-purple-700 mb-2">Description :</p>
				<p class="text-sm">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatum facere, ex numquam sapiente, excepturi
					voluptatibus optio commodi consequuntur necessitatibus sint dicta magnam reiciendis recusandae eius minus, qui ab
					assumenda.
				</p>
			</div>
			<div class="border p-4 rounded-lg h-full w-2/3">
				<p class="font-bold text-lg text-purple-700 mb-6">All Registered Coaches :</p>
				<div class="flex gap-10 flex-wrap justify-evenly">
					<div v-for="image in images" :key="image.id" class="flex flex-col">
						<img :src="image.src" alt="profile pic" class="w-20 h-20 object-cover rounded-full cursor-pointer" />
						<p class="text-sm font-medium mt-4">Rajveer Singh</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
	components: {},
	data() {
		return {
			images: [
				{
					id: 1,
					src: 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504',
				},
				{
					id: 2,
					src: 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504',
				},
				{
					id: 3,
					src: 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504',
				},
				{
					id: 4,
					src: 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504',
				},
				{
					id: 5,
					src: 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504',
				},
			],
		}
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
