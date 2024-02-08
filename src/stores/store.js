import { createStore } from 'vuex'
import coachesModule from './modules/coaches.js'
import requestModule from './modules/requests.js'

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestModule,
	},
	state() {
		return {
			userId: 'c1',
		}
	},
	mutations: {},
	actions: {},
	getters: {
		userId(state) {
			return state.userId
		},
	},
})

export default store
