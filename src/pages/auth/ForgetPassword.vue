<template>
	<section class="flex justify-center">
		<BaseCard class="flex flex-col mt-10 gap-4 md:w-1/2">
			<h1 class="text-purple-700 font-bold text-xl mt-4 text-center md:text-start">Forgot Password</h1>
			<inputtext class="w-full" v-model.trim="email" :errorMessage="error.email" placeholder="johnDoe123@gmail.com" label="Email" />
			<div class="flex items-center gap-4 mb-4">
				<BaseButton
					customButton
					class="bg-violet-700 w-fit py-2 px-4 rounded-full font-bold text-white text-sm"
					@click="submitEmail"
					:disabled="emailSent"
					>Submit Email</BaseButton
				>
				<p
					class="text-sm md:text-base border-none px-4 rounded-md bg-none text-purple-700 font-medium hover:bg-purple-100 cursor-pointer w-fit py-2"
					@click="goToLoginPage"
				>
					Login Instead
				</p>
			</div>
			<p v-if="errorMessage" class="text-xs text-center text-red-600">{{ errorMessage }}</p>
			<p v-if="successMessage" class="text-xs text-center text-green-600">{{ successMessage }}</p>
		</BaseCard>
	</section>
</template>

<script>
import inputtext from '../../components/ui/inputtext.vue'
import { auth, sendPasswordResetEmail } from '../../../firebase.js'
import { debounce } from 'lodash'

export default {
	components: {
		inputtext,
	},
	data() {
		return {
			email: null,
			isEmailValid: true,
			error: {
				email: '',
			},
			errorMessage: null,
			successMessage: null,
			emailSent: false,
		}
	},
	methods: {
		validEmail() {
			this.isEmailValid = true
			if (!this.email || !this.email.includes('@')) {
				this.error.email = 'Please enter a valid email'
				this.isEmailValid = false
			}
			return this.isEmailValid
		},
		submitEmail: debounce(function () {
			if (this.validEmail() && !this.emailSent) {
				sendPasswordResetEmail(auth, this.email)
					.then(() => {
						this.successMessage = 'An Email has been sent to your account with instructions. Please check and follow the link'
						this.emailSent = true
						setTimeout(() => {
							this.$router.push('/auth')
						}, 5000)
					})
					.catch((err) => {
						this.errorMessage = err
					})
			}
		}, 1000),
		goToLoginPage() {
			this.$router.push('/auth')
		},
	},
}
</script>
