import { createStore } from 'vuex'
import coachesModule from './modules/coaches.js'
import requestModule from './modules/requests.js'
import authModule from './modules/auth.js'

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestModule,
		auth: authModule,
	},
	state() {
		return {}
	},
	mutations: {},
	actions: {},
	getters: {},
})

export default store
