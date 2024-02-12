const authModule = {
	state() {
		return {
			userId: 'c2',
		}
	},
	mutations: {},
	actions: {},
	getters: {
		userId(state) {
			return state.userId
		},
	},
}

export default authModule
