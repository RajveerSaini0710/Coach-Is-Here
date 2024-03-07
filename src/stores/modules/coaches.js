import axios from 'axios'

const coachesModule = {
	state() {
		return {
			coaches: [],
			lastFetch: null,
		}
	},
	mutations: {
		addCoach(state, payload) {
			state.coaches.push(payload)
		},
		setCoach(state, payload) {
			state.coaches = payload
		},
		setLastFetchTimeStamp(state) {
			state.lastFetch = new Date().getTime()
		},
	},
	actions: {
		async addCoach(context, payload) {
			const userId = context.rootGetters.userId
			// const token = context.rootGetters.token
			const coachData = {
				firstName: payload.first_name,
				middleName: payload.middle_name,
				lastName: payload.last_name,
				phoneNumber: payload.phone_number,
				emailId: payload.email_id,
				areas: payload.selected_area.map((area) => area.toLowerCase()),
				description: payload.discription,
				hourlyRate: payload.hourly_rate,
			}
			await axios
				.post(`https://us-central1-coach-is-here.cloudfunctions.net/api/coaches/${userId}`, coachData)
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
		async loadCoaches(context, payload) {
			if (!payload.forceRefresh && !context.getters.shouldUpdate) {
				return
			}
			await axios
				.get(`https://us-central1-coach-is-here.cloudfunctions.net/api/coaches`)
				.then((res) => {
					let data = res.data
					const coach = data.map((data) => {
						return {
							id: data._id,
							firstName: data.firstName,
							lastName: data.lastName,
							areas: data.areas,
							description: data.description,
							hourlyRate: data.hourlyRate,
						}
					})
					let coaches = [...coach]
					// for (const id in data) {
					// 	const coach = {
					// 		id: id,
					// 		firstName: data[id].firstName,
					// 		lastName: data[id].lastName,
					// 		areas: data[id].areas,
					// 		description: data[id].description,
					// 		hourlyRate: data[id].hourlyRate,
					// 	}
					// 	coaches.push(coach)
					// }
					context.commit('setCoach', coaches)
					context.commit('setLastFetchTimeStamp')
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
	getters: {
		coaches(state) {
			return state.coaches
		},
		profileData(state, _getters, _rootState, rootGetters) {
			const userId = rootGetters.userId
			return state.coaches.filter((coach) => {
				return coach.id === userId
			})
		},
		hasCoaches(state) {
			return state.coaches && state.coaches.length > 0
		},
		isCoach(_state, getters, _rootState, rootGetters) {
			const coaches = getters.coaches
			const userId = rootGetters.userId
			return coaches.some((coach) => coach.id === userId)
		},
		shouldUpdate(state) {
			const lastFetch = state.lastFetch
			if (!lastFetch) {
				return true
			}
			const currentTimeStamp = new Date().getTime()
			return (currentTimeStamp - lastFetch) / 1000 > 60
		},
	},
}

export default coachesModule
