<template>
	<section class="flex justify-center">
		<BaseCard>
			<h1 class="text-purple-700 inline-block font-black text-2xl mb-6">Intrested? Reach Out Now! :</h1>
			<div class="flex items-center mb-4 flex-wrap ml-4">
				<formInput
					@keypress="isLetter($event)"
					label="Email ID"
					v-model.trim="data.email"
					size="small"
					placeholder="john123@gmail.com"
					class="mr-10"
					:errorMessage="formError.email"
				/>
				<divider align="left" type="solid">
					<b class="text-purple-600">Message</b>
				</divider>

				<div class="card flex ml-6 mb-4">
					<Textarea v-model="data.message" rows="5" cols="50" placeholder="Message ..." />
				</div>
				<InlineMessage v-if="!isFormDataValid" class="text-xs text-red-600 ml-4">{{ formError.message }}</InlineMessage>

				<BaseButton class="font-bold flex items-center justify-end" normalButton @click.prevent="submitFormData">
					Send Request
				</BaseButton>
			</div>
		</BaseCard>
	</section>
</template>

<script>
import formInput from '../../components/ui/inputtext.vue'
import Textarea from 'primevue/textarea'
import InlineMessage from 'primevue/inlinemessage'
import Divider from 'primevue/divider'
export default {
	components: {
		formInput,
		Textarea,
		Divider,
	},
	data() {
		return {
			isFormDataValid: true,
			data: {
				email: null,
				message: null,
			},
			formError: {
				email: '',
				message: '',
			},
		}
	},
	methods: {
		validateFormData() {
			this.isFormDataValid = true
			this.formError = {
				email: '',
				message: '',
			}
			if (!this.data.email && !this.data.email.includes('@')) {
				this.formError.email = 'please enter the email correctly'
				this.isFormDataValid = false
			}
			if (!this.data.message) {
				this.formError.message = 'Please enter the message'
				this.isFormDataValid = false
			}
		},
		submitFormData() {
			this.validateFormData
			if (!this.isFormDataValid) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			} else {
				const payload = {
					email: this.data.email,
					message: this.data.message,
					coachId: this.$route.params.id,
				}
				this.$store.dispatch('addRequest', payload)
				this.$router.push('/coaches')
			}
		},
		isLetter(e) {
			let char = String.fromCharCode(e.keyCode) // Get the character
			if (/^[A-Za-z]+$/.test(char))
				return true // Match with regex
			else e.preventDefault() // If not match, don't add to input text
		},
	},
}
</script>
