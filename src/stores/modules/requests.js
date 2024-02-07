const requestModule = {
	state() {
		return {
			requests: [],
		}
	},
	mutations: {
		addRequest(state, payload) {
			console.log(payload)
			return state.requests.push(payload)
		},
	},
	actions: {
		addRequest(context, payload) {
			const newRequest = {
				id: new Date().toISOString(),
				coachId: payload.coachId,
				userEmail: payload.email,
				message: payload.message,
			}

			context.commit('addRequest', newRequest)
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
