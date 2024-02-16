<template>
	<header class="w-full h-16 md:h-20 bg-violet-900 flex justify-center items-center">
		<nav class="w-[96%] flex justify-between items-center">
			<h1 class="text-xs md:text-2xl sm:text-sm font-[Sixtyfour]" style="word-spacing: -6px">
				<router-link class="text-white" to="/"> Coach Is Here </router-link>
			</h1>
			<div v-if="screenWidth < 500">
				<transition name="fade">
					<i v-if="!menuOpen" class="pi pi-align-right text-white text-xl mr-2 cursor-pointer" @click="toggleMenu"> </i>
				</transition>
				<!-- menu options  -->
				<transition name="mobileMenu">
					<div
						v-if="menuOpen"
						class="fixed top-0 bottom-0 left-40 right-0 bg-violet-800 bg-opacity-90 flex flex-col justify-start items-start z-50"
					>
						<div class="w-full flex justify-end">
							<i
								v-if="menuOpen"
								class="pi pi-times text-white font-bold text-xl mt-6 mr-4 cursor-pointer"
								@click="toggleMenu"
							>
							</i>
						</div>
						<div class="mt-12 ml-6">
							<ul class="flex flex-col items-start">
								<li v-if="isLoggedIn" class="mt-4" @click="toggleMenu">
									<router-link class="text-white text-xl font-bold hover:text-purple-200" to="/profile">
										My Profile
									</router-link>
								</li>
								<li @click="toggleMenu" class="mt-4">
									<router-link class="text-white text-xl font-bold hover:text-violet-100" to="/coaches">
										All Coaches
									</router-link>
								</li>
								<li v-if="isLoggedIn" class="mt-4" @click="toggleMenu">
									<router-link class="text-white text-xl font-bold hover:text-purple-200" to="/requests">
										Requests
									</router-link>
								</li>
								<li v-else class="mt-4" @click="toggleMenu">
									<router-link class="text-white text-xl font-bold hover:text-purple-200" to="/auth"> Login </router-link>
								</li>
								<li v-if="isLoggedIn" class="mt-4" @click="toggleMenu">
									<BaseButton customButton class="text-white text-xl font-bold hover:text-purple-200" @click="logout">
										Logout</BaseButton
									>
								</li>
							</ul>
						</div>
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
					<li v-if="isLoggedIn" class="m-1"></li>
					<router-link
						to="/profile"
						class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
					>
						My Profile</router-link
					>
					<BaseButton
						customButton
						class="text-pink-300 inline-block border border-transparent hover:border-pink-300 active:border-pink-300 focus:border-pink-300 px-2 py-3 text-xs md:text-xl md:px-3 md:py-3"
						@click="logout"
					>
						Logout</BaseButton
					>
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

.mobileMenu-enter-active,
.mobileMenu-leave-active {
	transition: all 0.8s ease-out;
}
.mobileMenu-enter-from {
	opacity: 0;
	transform: translateX(100%);
}
.mobileMenu-leave-to {
	opacity: 0;
	transform: translateX(100%);
}
.mobileMenu-enter-to,
.mobileMenu-leave-from {
	opacity: 1;
	transform: translateX(0);
}
</style>
