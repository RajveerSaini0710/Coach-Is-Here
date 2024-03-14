<template>
	<section class="w-full">
		<div class="w-full h-44 md:h-72 md:mb-36 mb-24">
			<div class="w-full h-full bg-purple-300 relative">
				<img
					src="../../assets/images/wp4327153-macbook-4k-wallpapers.jpg"
					alt="wallpaper"
					class="w-full h-full object-fill opacity-80 hover:opacity-100 transition-all duration-1000 ease-in"
				/>
				<div class="absolute md:top-60 md:left-16 md:w-44 md:h-44 top-36 left-4 w-20 h-20">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504"
						alt="profile pic"
						class="w-full h-full object-cover rounded-full"
					/>
				</div>
			</div>
			<div class="md:ml-64 md:mt-4 ml-28 mt-2 flex justify-center">
				<div class="flex-grow">
					<h1 class="md:text-4xl font-bold text-violet-700 protest-riot-regular">{{ fullName }}</h1>
					<p class="md:font-medium text-xs text-violet-500 md:mb-3 mb-1">{{ specialities }} Developer</p>
					<div v-if="screenWidth > 500" class="font-light text-xs text-violet-500 flex flex-wrap">
						<a v-if="myData?.emailId" :href="emailLink" class="mr-6 mb-1 cursor-pointer text-base font-medium"
							><i class="pi pi-google"> </i> {{ myData?.emailId }}</a
						>
						<a v-if="myData?.phoneNumber" :href="phoneLink" class="mr-6 mb-1 text-base font-medium"
							><i class="pi pi-phone"> </i> {{ myData?.phoneNumber }}</a
						>
					</div>
				</div>

				<div class="md:mr-10 md:mt-2 mr-4 mt-2">
					<i class="pi pi-user-edit md:text-3xl text-lg text-violet-700 cursor-pointer" @click="editData"></i>
				</div>
			</div>
			<div v-if="screenWidth < 500" class="font-light text-xs text-violet-500 flex flex-wrap mt-2 justify-center gap-6">
				<a v-if="myData?.emailId" :href="emailLink" class="mr-6 mb-1 cursor-pointer text-xs font-medium"
					><i class="pi pi-google"> </i> {{ myData?.emailId }}</a
				>
				<a v-if="myData?.phoneNumber" :href="phoneLink" class="mr-6 mb-1 text-xs font-medium"
					><i class="pi pi-phone"> </i> {{ myData?.phoneNumber }}</a
				>
			</div>
		</div>
		<div class="flex flex-col md:flex-row items-center md:items-start md:justify-evenly md:w-full">
			<div class="border p-4 rounded-lg md:w-1/4 w-11/12 mb-4 md:mb-0">
				<p class="font-bold md:text-lg text-sm text-purple-700 mb-2">Description :</p>
				<p class="md:text-sm text-xs">
					{{ myData?.description ? myData?.description : '...Register as a coach' }}
				</p>
			</div>
			<div class="border p-4 rounded-lg h-full md:w-2/3 w-11/12 mb-4 md:mb-0">
				<p class="font-bold md:text-lg text-sm text-purple-700 mb-6">All Registered Coaches :</p>
				<div class="flex gap-10 flex-wrap justify-evenly">
					<div v-for="image in images" :key="image.id" class="flex flex-col items-center">
						<img
							:src="image.src"
							alt="profile pic"
							class="md:w-20 md:h-20 w-14 h-14 object-cover rounded-full cursor-pointer"
						/>
						<p class="md:text-sm text-xs font-medium mt-4">Rajveer Singh</p>
					</div>
					<div v-for="coach in allCoaches" :key="coach.id" class="flex flex-col items-center">
						<img
							v-if="coach.image"
							:src="getImageUrl(coach.image)"
							alt="profile pic"
							class="md:w-20 md:h-20 w-14 h-14 object-cover rounded-full cursor-pointer mb-2"
						/>
						<i
							class="pi pi-user text-center border-black border-2 w-12 h-12 pt-1 object-cover rounded-full cursor-pointer"
							style="font-size: 2rem"
						></i>
						<p>{{ `${coach.firstName} ${coach.lastName} ` }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
	computed: {
		fullName() {
			return this.myData?.firstName ? `${this.myData?.firstName} ${this.myData?.middleName} ${this.myData?.lastName}` : 'Name'
		},
		specialities() {
			return this.myData?.areas ? this.myData?.areas.join(' & ').toUpperCase() : '---'
		},
		emailLink() {
			return `mailto:${this.myData?.emailId}`
		},
		phoneLink() {
			return `tel:${this.myData?.phoneNumber}`
		},
		defaultImageUrl() {
			return 'https://firebasestorage.googleapis.com/v0/b/saini-lifters.appspot.com/o/folder%2Fwp4327153-macbook-4k-wallpapers.jpg?alt=media&token=95d5a8c7-0a03-4d4b-b7d3-b302fa6a2504'
		},
	},
	data() {
		return {
			myData: null,
			allCoaches: null,
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
			screenWidth: 0,
		}
	},
	created() {
		this.loadCoaches()
		this.updateScreenSize()
		window.addEventListener('resize', this.updateScreenSize)
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateScreenSize)
	},
	methods: {
		editData() {
			console.log('edit')
		},
		updateScreenSize() {
			this.screenWidth = window.innerWidth
		},
		async loadCoaches() {
			await this.$store.dispatch('loadAllCoaches')
			this.myData = this.$store.getters.profileData[0]
			this.allCoaches = this.$store.getters.coaches.slice(0, 5)
		},
		getImageUrl(imageUrl) {
			return imageUrl ? imageUrl : this.defaultImageUrl
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
