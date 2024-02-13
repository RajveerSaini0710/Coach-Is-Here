<template>
	<header class="w-full h-16 md:h-20 bg-violet-900 flex justify-center items-center">
		<nav class="w-[96%] flex justify-between items-center">
			<h1 class="text-xs md:text-2xl sm:text-sm font-[Sixtyfour]" style="word-spacing: -6px">
				<router-link class="text-white" to="/"> Coach Is Here </router-link>
			</h1>
			<div v-if="screenWidth < 500">
				<transition name="fade">
					<i v-if="!menuOpen" class="pi pi-align-right text-white text-xl mr-2 cursor-pointer" @click="toggleMenu"> </i>
					<div v-else>
						<i class="pi pi-times text-white text-xl mr-2 cursor-pointer" @click="toggleMenu"> </i>
						<ul>
							<li>Home</li>
						</ul>
					</div>
				</transition>
			</div>
			<div v-else>
				<ul class="flex justify-center items-center">
					<li class="m-1">
						<router-link
							class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
							to="/coaches"
						>
							All Coaches
						</router-link>
					</li>
					<li v-if="isLoggedIn" class="m-1">
						<router-link
							class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
							to="/requests"
						>
							Requests
						</router-link>
					</li>
					<li v-else class="m-1">
						<router-link
							class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
							to="/auth"
						>
							Login
						</router-link>
					</li>
					<li v-if="isLoggedIn" class="m-1">
						<BaseButton
							customButton
							class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
							@click="logout"
						>
							Logout</BaseButton
						>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		isLoggedIn() {
			return this.$store.getters.isAuthenticated
		},
	},
	data() {
		return {
			screenWidth: 0,
			menuOpen: false,
		}
	},
	// for getting the size of screen
	mounted() {
		this.updateScreenSize()
		window.addEventListener('resize', this.updateScreenSize)
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateScreenSize)
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.$router.replace('/coaches')
		},
		updateScreenSize() {
			this.screenWidth = window.innerWidth
		},
		toggleMenu() {
			this.menuOpen = !this.menuOpen
		},
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap');
.fade-enter-active,
.fade-leave-active {
	transition: all 0.8s ease-in-out;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
