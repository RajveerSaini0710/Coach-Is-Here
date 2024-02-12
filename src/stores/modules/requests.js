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
					`https://coach-is-here-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
					newRequest
				)
				const Id = res.data.name
				newRequest.id = Id
				newRequest.coachId = payload.coachId
				context.commit('addRequest', newRequest)
			} catch (error) {
				console.error('Error adding request:', error)
			}
		},
		async fetchRequest(context) {
			const coachId = context.rootGetters.userId
			const token = context.rootGetters.token
			await axios
				.get(`https://coach-is-here-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`)
				.then((res) => {
					let data = res.data
					let requests = []
					for (let id in data) {
						const request = {
							id: id,
							message: data[id].message,
							userEmail: data[id].userEmail,
							coachId: coachId,
						}
						requests.push(request)
					}
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
			return state.requests.filter((req) => req.coachId === coachId)
		},
		hasRequests(_state, getters) {
			return getters.requests && getters.requests.length > 0
		},
	},
}

export default requestModule
