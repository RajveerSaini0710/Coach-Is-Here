const coachesModule = {
	state() {
		return {
			coaches: [
				{
					id: 'c1',
					firstName: 'Maximilian',
					lastName: 'Schwarzmüller',
					areas: ['frontend', 'backend', 'career'],
					description:
						"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
					hourlyRate: 30,
				},
				{
					id: 'c2',
					firstName: 'Julie',
					lastName: 'Jones',
					areas: ['frontend', 'career'],
					description:
						'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
					hourlyRate: 30,
				},
			],
		}
	},
	mutations: {
		addCoach(state, payload) {
			state.coaches.push(payload)
		},
	},
	actions: {
		addCoach(context, payload) {
			const coachData = {
				id: context.rootGetters.userId,
				firstName: payload.first_name,
				lastName: payload.last_name,
				areas: payload.selected_area.map((area) => area.toLowerCase()),
				description: payload.discription,
				hourlyRate: payload.hourly_rate,
			}
			context.commit('addCoach', coachData)
		},
	},
	getters: {
		coaches(state) {
			return state.coaches
		},
		hasCoaches(state) {
			return state.coaches && state.coaches.length > 0
		},
		isCoach(_state, getters, _rootState, rootGetters) {
			const coaches = getters.coaches
			const userId = rootGetters.userId
			return coaches.some((coach) => coach.id === userId)
		},
	},
}

export default coachesModule
