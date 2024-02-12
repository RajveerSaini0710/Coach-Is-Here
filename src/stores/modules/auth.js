import axios from 'axios'

const authModule = {
	state() {
		return {
			userId: null,
			token: null,
			tokenExpiration: null,
		}
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token
			state.userId = payload.userId
			state.tokenExpiration = payload.tokenExpiration
		},
	},
	actions: {
		login() {},
		signup(context, payload) {
			const Payload = {
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}
			axios
				.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMt40w_cjbrbwzt2Kjf2dx2VIJM4Lx8NE', Payload)
				.then((res) => {
					console.log(res)
					const payload = {
						token: res.idToken,
						userId: res.localId,
						tokenExpiration: res.expiresIn,
					}
					context.commit('setUser', payload)
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
	getters: {
		userId(state) {
			return state.userId
		},
	},
}

export default authModule
