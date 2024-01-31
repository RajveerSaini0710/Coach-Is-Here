import { createStore } from 'vuex'
import coachesModule from './modules/coaches.js'
import requestModule from './modules/requests.js'

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestModule,
    },
    state() {},
    mutations: {},
    actions: {},
    getters: {},
})

export default store
