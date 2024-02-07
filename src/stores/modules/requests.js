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
	getters: {},
}

export default requestModule
