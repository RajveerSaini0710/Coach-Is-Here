<template>
	<TheHeader></TheHeader>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
import TheHeader from '../src/components/layout/TheHeader.vue'

export default {
	components: {
		TheHeader,
	},
	computed: {
		autoLogout() {
			return this.$store.getters.autoLogout
		},
	},
	created() {
		this.$store.dispatch('autoLogin')
	},
	watch: {
		autoLogout(curVal, oldVal) {
			if (curVal && curVal !== oldVal) {
				this.$router.replace('/coaches')
			}
		},
	},
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap'); */

@font-face {
	font-family: 'M PLUS 1p';
	src: url('../assets/fonts/MPLUS1p-Regular.ttf');
}
* {
	box-sizing: border-box;
}

html {
	font-family: 'M PLUS 1p', sans-serif;
	font-size: 18px;
}
body {
	margin: 0;
}

.route-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.route-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.route-enter-active {
	transition: all 0.3s ease-out;
}

.route-leave-active {
	transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>
