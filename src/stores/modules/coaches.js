import axios from 'axios'

const coachesModule = {
	state() {
		return {
			coaches: [],
			lastFetch: null,
			error: null,
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
		setError(state, error) {
			state.error = error
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
				.put(`https://coach-is-here-default-rtdb.firebaseio.com/coaches/${userId}.json`, coachData)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					context.commit('setError', err)
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
				.get(`https://coach-is-here-default-rtdb.firebaseio.com/coaches.json`)
				.then((res) => {
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
					context.commit('setLastFetchTimeStamp')
				})
				.catch((err) => {
					context.commit('setError', err)
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
		shouldUpdate(state) {
			const lastFetch = state.lastFetch
			if (!lastFetch) {
				return true
			}
			const currentTimeStamp = new Date().getTime()
			return (currentTimeStamp - lastFetch) / 1000 > 60
		},
		showError(state) {
			return state.error
		},
	},
}

export default coachesModule
