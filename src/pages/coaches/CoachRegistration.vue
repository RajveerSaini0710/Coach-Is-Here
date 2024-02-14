<template>
	<section class="flex justify-center">
		<BaseCard class="flex flex-col items-center md:block">
			<h1 class="text-purple-700 inline-block font-black text-2xl mb-6">Register As A Coach :</h1>
			<div class="w-11/12 flex items-center justify-center md:justify-normal mb-4 flex-wrap md:ml-4">
				<formInput
					@keypress="isLetter($event)"
					label="First Name"
					v-model.trim="data.firstName"
					size="small"
					placeholder="John"
					class="md:mr-10 w-full md:w-auto"
					:errorMessage="formError.firstName"
				/>
				<formInput
					@keypress="isLetter($event)"
					label="Middle Name"
					v-model.trim="data.middleName"
					size="small"
					placeholder="Martus"
					class="md:mr-10 w-full md:w-auto"
				/>
				<formInput
					@keypress="isLetter($event)"
					label="Last Name"
					v-model.trim="data.lastName"
					size="small"
					placeholder="Doe"
					:errorMessage="formError.lastName"
					class="w-full md:w-auto"
				/>
			</div>
			<div class="flex items-center mb-10 flex-wrap md:ml-4 w-11/12">
				<formInput
					@keypress="isNumber($event)"
					type="number"
					label="Phone Number"
					v-model.number="data.phoneNumber"
					size="small"
					placeholder="9999999999"
					class="md:mr-12 w-full md:w-auto"
					:errorMessage="formError.phoneNumber"
				/>
				<formInput
					@keypress="isNumber($event)"
					label="Hourly Rate"
					v-model.number="data.hourlyRate"
					size="small"
					placeholder="25"
					:errorMessage="formError.hourlyRate"
					class="w-full md:w-auto"
				/>
			</div>
			<divider align="left" type="solid">
				<b class="text-purple-600">Discription</b>
			</divider>

			<div class="card flex md:ml-6 mb-4 w-11/12 md:w-auto">
				<Textarea v-model="data.discription" rows="5" cols="50" placeholder="About yourself ..." />
			</div>
			<InlineMessage v-if="!isFormDataValid" class="text-xs text-red-600 ml-4">{{ formError.discription }}</InlineMessage>

			<divider align="left" type="solid">
				<b class="text-purple-600">Areas of Expertise</b>
			</divider>
			<div class="flex md:gap-8 items-center md:mb-10 flex-wrap w-11/12 justify-evenly md:justify-normal my-4">
				<div
					v-for="(expert, index) in expertise"
					:key="index"
					class="text-purple-700 md:py-2 md:ml-4 flex flex-col items-center justify-evenly md:block"
				>
					<Checkbox v-model="data.selectedArea" :id="expert.id" :value="expert.name" class="mr-2" name="weekdays" />
					<label :for="expert.id">{{ expert.name }}</label>
				</div>
				<InlineMessage v-if="!isFormDataValid" class="text-xs text-red-600 ml-4">{{ formError.selectedArea }}</InlineMessage>
			</div>
			<divider align="left" type="solid">
				<b class="text-purple-600">Date Of Birth</b>
			</divider>
			<div class="mb-2 flex flex-col md:block items-center w-11/12">
				<Calendar
					v-model="data.dob"
					id="myCalendar"
					inputId="Birth_date"
					showIcon
					iconDisplay="input"
					class="md:ml-6 w-full md:w-auto mb-6 md:mb-0"
				/>
				<InlineMessage v-if="!isFormDataValid" class="text-xs ml-6 text-red-600">{{ formError.dob }}</InlineMessage>

				<BaseButton
					class="font-bold md:flex md:items-center md:justify-end mb-4 md:mb-0"
					normalButton
					@click.prevent="submitFormData"
				>
					Submit
				</BaseButton>
			</div>
		</BaseCard>
	</section>
</template>

<script>
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'
import Calendar from 'primevue/calendar'
import InlineMessage from 'primevue/inlinemessage'
import formInput from '../../components/ui/InputText.vue'
// import axios from 'axios'

export default {
	components: {
		formInput,
		Checkbox,
		Divider,
		RadioButton,
		Calendar,
		Textarea,
	},
	data() {
		return {
			isFormDataValid: true,
			formError: {
				firstName: '',
				lastName: '',
				phoneNumber: '',
				hourlyRate: '',
				selectedArea: '',
				dob: '',
				discription: '',
			},
			expertise: [
				{ id: 'front', name: 'Frontend' },
				{ id: 'back', name: 'Backend' },
				{ id: 'career', name: 'Career' },
			],

			data: {
				firstName: null,
				middleName: null,
				lastName: null,
				phoneNumber: null,
				hourlyRate: null,
				discription: null,
				selectedArea: [],
				dob: null,
			},
		}
	},
	methods: {
		validateForm() {
			this.isFormDataValid = true
			this.formError = {
				firstName: '',
				lastName: '',
				phoneNumber: '',
				hourlyRate: '',
				selectedArea: '',
				dob: '',
				discription: '',
			}
			if (!this.data.firstName) {
				this.formError.firstName = 'Please Enter The First Name'
				this.isFormDataValid = false
			}
			if (!this.data.lastName) {
				this.formError.lastName = 'Please Enter The Last Name'
				this.isFormDataValid = false
			}
			if (!this.data.phoneNumber) {
				this.formError.phoneNumber = 'Please Enter The Phone Number'
				this.isFormDataValid = false
			}
			if (!this.data.hourlyRate) {
				this.formError.hourlyRate = 'Please Enter The Hourly Rate'
				this.isFormDataValid = false
			}
			if (!this.data.discription) {
				this.formError.discription = 'Please Enter The Discription'
				this.isFormDataValid = false
			}
			if (this.data.selectedArea.length === 0) {
				this.formError.selectedArea = 'Please Select the Area Of Expertise'
				this.isFormDataValid = false
			}
			if (!this.data.dob) {
				this.formError.dob = 'Please Select Your Date Of Birth'
				this.isFormDataValid = false
			}
		},
		submitFormData() {
			this.validateForm()
			if (!this.isFormDataValid) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			} else {
				const payload = {
					first_name: this.data.firstName,
					middle_name: this.data.middleName,
					last_name: this.data.lastName,
					phone_number: this.data.phoneNumber,
					hourly_rate: this.data.hourlyRate,
					discription: this.data.discription,
					selected_area: this.data.selectedArea,
					dob: this.data.dob,
				}
				this.$store.dispatch('addCoach', payload)
				this.$router.push('/coaches')
				// axios
				// 	.post('https://saini-lifters-default-rtdb.firebaseio.com/coach-form.json', payload)
				// 	.then((res) => {
				// 		console.log(res)
				// 	})
				// 	.catch((err) => {
				// 		console.log(err)
				// 	})
			}
		},

		isLetter(e) {
			let char = String.fromCharCode(e.keyCode) // Get the character
			if (/^[A-Za-z]+$/.test(char))
				return true // Match with regex
			else e.preventDefault() // If not match, don't add to input text
		},
		isNumber(e) {
			e = e ? e : window.event
			var charCode = e.which ? e.which : e.keyCode
			if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
				e.preventDefault()
			} else {
				return true
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
