<template>
	<section class="flex justify-center">
		<BaseCard>
			<h1 class="text-purple-700 inline-block font-black text-2xl mb-6">{{ 'Login Page' }}</h1>
			<div class="flex flex-col">
				<formInput
					@keypress="isEmail($event)"
					label="Email"
					v-model.trim="data.email"
					placeholder="text123@test.com"
					class="mb-4"
					:errorMessage="formError.email"
				/>
				<div class="mb-6">
					<label for="password" class="text-purple-600 block mb-1">Password</label>
					<Password
						v-model="data.password"
						inputId="password"
						toggleMask
						placeholder="Test@123"
						required
						size="small"
						class="w-full"
						inputClass="w-full ring-transparent border border-purple-200 focus:border-purple-500 rounded-md width"
					/>
					<InlineMessage v-if="formError.password" class="text-xs text-red-600">{{ formError.password }}</InlineMessage>
				</div>
				<div class="flex mb-6">
					<BaseButton normalButton class="mr-4 text-base" @click="submitData">Login</BaseButton>
					<BaseButton
						customButton
						class="border-none px-4 rounded-md bg-none flex justify-center items-center text-purple-700 font-medium hover:bg-purple-100"
						@click="switchAuthMode"
					>
						Signup Instead
					</BaseButton>
				</div>
			</div>
		</BaseCard>
	</section>
</template>

<script>
import Password from 'primevue/password'
import InlineMessage from 'primevue/inlinemessage'
import formInput from '../../components/ui/inputtext.vue'
import BaseButton from '../../components/ui/BaseButton.vue'
export default {
	components: {
		Password,
		formInput,
		BaseButton,
	},
	data() {
		return {
			data: {
				email: null,
				password: null,
				confirmPassword: null,
			},
			formError: {
				email: '',
				password: '',
				confirmPassword: '',
			},
			isFormValid: true,
			mode: 'login',
		}
	},
	methods: {
		validLoginData() {
			this.isFormValid = true
			this.formError = {
				email: '',
				password: '',
				confirmPassword: '',
			}
			if (!this.data.email || !this.data.email.includes('@')) {
				this.formError.email = 'Please Enter your Email correctely'
				this.isFormValid = false
			}
			if (!this.data.password) {
				this.formError.password = 'Please enter your Password correctely'
				this.isFormValid = false
			}
		},
		submitData() {
			this.validLoginData()
			console.log('Login')
		},
		switchAuthMode() {
			console.log('switch')
		},
		isEmail(e) {
			return String(e)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		},
	},
}
</script>
