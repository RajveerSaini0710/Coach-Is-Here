import axios from 'axios'

const requestModule = {
	state() {
		return {
			requests: [],
		}
	},
	mutations: {
		addRequest(state, payload) {
			return state.requests.push(payload)
		},
		setRequest(state, payload) {
			state.requests = payload
		},
	},
	actions: {
		async addRequest(context, payload) {
			const newRequest = {
				userEmail: payload.email,
				message: payload.message,
			}
			try {
				const res = await axios.post(
					`https://us-central1-coach-is-here.cloudfunctions.net/api/requests/${payload.coachId}`,
					newRequest
				)
				const Id = res.data._id
				newRequest.id = Id
				newRequest.coachId = payload.coachId
				context.commit('addRequest', newRequest)
			} catch (error) {
				console.error('Error adding request:', error)
			}
		},
		async fetchRequest(context) {
			const coachId = context.rootGetters.userId
			// const token = context.rootGetters.token
			await axios
				.get(`https://us-central1-coach-is-here.cloudfunctions.net/api/requests/${coachId}`)
				.then((res) => {
					let data = res.data

					const request = data.map((data) => {
						return {
							id: data._id,
							message: data.message,
							userEmail: data.userEmail,
							coachId: data.coachId,
						}
					})
					let requests = [...request]
					context.commit('setRequest', requests)
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
	getters: {
		requests(state, _getters, _rootState, rootGetters) {
			const coachId = rootGetters.userId
			return state.requests.filter((req) => {
				return req.coachId === coachId
			})
		},
		hasRequests(_state, getters) {
			return getters.requests && getters.requests.length > 0
		},
	},
}

export default requestModule
