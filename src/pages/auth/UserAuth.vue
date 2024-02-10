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
				/>
				<div class="mb-6">
					<label for="password" class="text-purple-600 block">Password</label>
					<Password
						v-model="data.password"
						inputId="password"
						toggleMask
						size="small"
						class="w-full border border-purple-200 focus:border-purple-500 rounded-md placeholder:Test@123"
					/>
				</div>
				<div class="flex mb-6">
					<BaseButton normalButton class="mr-2 text-base">Login </BaseButton>
					<BaseButton
						customButton
						class="border-none px-4 rounded-md bg-none flex justify-center items-center text-purple-700 font-medium hover:bg-purple-100"
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
		}
	},
	methods: {
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
