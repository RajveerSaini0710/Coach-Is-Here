<template>
	<section class="flex flex-col items-center">
		<BaseCard>
			<h1 class="text-purple-700 inline-block font-black text-2xl mb-6">{{ submitButtonCaption }} Page</h1>
			<div v-if="isLoading">
				<BaseSpinner></BaseSpinner>
			</div>
			<div v-else class="flex flex-col">
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
						inputId="Password"
						toggleMask
						placeholder="Test@123"
						required
						size="small"
						class="w-full"
						inputClass="w-full ring-transparent border border-purple-200 focus:border-purple-500 rounded-md width"
					/>
					<InlineMessage v-if="formError.password" class="text-xs text-red-600">{{ formError.password }}</InlineMessage>
				</div>
				<div class="mb-6" v-if="this.mode === 'signup'">
					<label for="password" class="text-purple-600 block mb-1">Confirm Password</label>
					<Password
						v-model="data.confirmPassword"
						inputId="Confirm Password"
						toggleMask
						placeholder="Test@123"
						required
						size="small"
						class="w-full"
						inputClass="w-full ring-transparent border border-purple-200 focus:border-purple-500 rounded-md width"
					/>
					<InlineMessage v-if="formError.confirmPassword" class="text-xs text-red-600">{{
						formError.confirmPassword
					}}</InlineMessage>
				</div>
				<div class="flex mb-6">
					<BaseButton normalButton class="mr-4 text-base" @click="submitData">{{ submitButtonCaption }}</BaseButton>
					<BaseButton
						customButton
						class="border-none px-4 rounded-md bg-none flex justify-center items-center text-purple-700 font-medium hover:bg-purple-100"
						@click="switchAuthMode"
					>
						{{ switchModeButtonCaption }}
					</BaseButton>
				</div>
			</div>
		</BaseCard>
		<div class="text-sm text-red-500">
			<InlineMessage class="block mb-2" v-if="showError.message">
				Message:
				{{ showError.message }}
			</InlineMessage>
			<InlineMessage v-if="showError.code">
				ErrorCode:
				{{ showError.code }}
			</InlineMessage>
		</div>
	</section>
</template>

<script>
import Password from 'primevue/password'
import InlineMessage from 'primevue/inlinemessage'
import formInput from '../../components/ui/inputtext.vue'
import BaseButton from '../../components/ui/BaseButton.vue'
import { mapGetters } from 'vuex'
import Toast from 'primevue/toast'

export default {
	components: {
		Password,
		formInput,
		BaseButton,
		Toast,
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
			isLoading: false,
		}
	},

	computed: {
		submitButtonCaption() {
			if (this.mode === 'login') {
				return 'Login'
			} else {
				return 'Signup'
			}
		},
		switchModeButtonCaption() {
			if (this.mode === 'login') {
				this.formError = {
					email: '',
					password: '',
				}
				this.data = {
					email: null,
					password: null,
				}
				return 'Signup Instead'
			} else {
				this.formError = {
					email: '',
					password: '',
					confirmPassword: '',
				}
				this.data = {
					email: null,
					password: null,
					confirmPassword: null,
				}
				return 'Login Instead'
			}
		},
		...mapGetters(['showError']),
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
			if (!this.data.password || this.data.password.length < 7) {
				this.formError.password = 'Please enter your Password correctely'
				this.isFormValid = false
			}
			if (this.data.password !== this.data.confirmPassword) {
				this.formError.confirmPassword = "Password Don't Match"
				this.isFormValid = false
			}
		},
		async submitData() {
			this.validLoginData()

			if (!this.isFormValid) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			} else if (this.mode === 'login') {
				console.log('login')
			} else {
				this.isLoading = true
				await this.$store.dispatch('signup', {
					email: this.data.email,
					password: this.data.password,
				})
				this.isLoading = false
			}
		},
		switchAuthMode() {
			if (this.mode === 'login') {
				this.mode = 'signup'
			} else {
				this.mode = 'login'
			}
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
