import axios from 'axios'

const coachesModule = {
	state() {
		return {
			coaches: [],
		}
	},
	mutations: {
		addCoach(state, payload) {
			state.coaches.push(payload)
		},
		setCoach(state, payload) {
			state.coaches = payload
		},
	},
	actions: {
		async addCoach(context, payload) {
			const userId = context.rootGetters.userId
			const coachData = {
				firstName: payload.first_name,
				lastName: payload.last_name,
				areas: payload.selected_area.map((area) => area.toLowerCase()),
				description: payload.discription,
				hourlyRate: payload.hourly_rate,
			}
			await axios
				.put(`https://saini-lifters-default-rtdb.firebaseio.com/coaches/${userId}.json`, coachData)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					console.log(err)
				})
			context.commit('addCoach', {
				...coachData,
				id: userId,
			})
		},
		async loadCoaches(context) {
			await axios.get(`https://saini-lifters-default-rtdb.firebaseio.com/coaches.json`).then((res) => {
				let data = res.data
				let coaches = []
				for (const id in data) {
					const coach = {
						id: id,
						firstName: data[id].firstName,
						lastName: data[id].lastName,
						areas: data[id].areas,
						description: data[id].description,
						hourlyRate: data[id].hourlyRate,
					}
					coaches.push(coach)
				}
				context.commit('setCoach', coaches)
			})
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
