<template>
	<section class="flex justify-center">
		<BaseCard>
			<h2 class="text-purple-700 md:text-3xl text-xl font-bold text-center my-8">OOPS! Page Not Found...</h2>
			<p class="text-center mb-6 font-medium md:text-xl text-lg">
				Page could not be found - maybe checkout all our
				<router-link
					to="/coaches"
					class="block md:inline-block mt-4 w-11/12 md:w-auto text-xl font-bold text-purple-700 border-2 border-purple-400 px-4 py-2 ml-2 hover:bg-purple-800 hover:text-white hover:border-white hover:duration-700 hover:ease-out hover:transition-colors"
				>
					COACHES
				</router-link>
			</p>
		</BaseCard>
	</section>
</template>
