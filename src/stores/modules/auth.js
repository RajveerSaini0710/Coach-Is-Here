import axios from 'axios'

const authModule = {
	state() {
		return {
			userId: null,
			token: null,
			tokenExpiration: null,
			errorMessage: null,
			errorCode: null,
		}
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token
			state.userId = payload.userId
			state.tokenExpiration = payload.tokenExpiration
		},
		setError(state, error) {
			state.errorMessage = error.message
			state.errorCode = error.code
		},
	},
	actions: {
		login(context, payload) {
			const Payload = {
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}
			axios
				.post(
					'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMt40w_cjbrbwzt2Kjf2dx2VIJM4Lx8NE',
					Payload
				)
				.then((res) => {
					console.log(res)
					const payload = {
						token: res.data.idToken,
						userId: res.data.localId,
						tokenExpiration: res.data.expiresIn,
					}
					context.commit('setUser', payload)
				})
				.catch((err) => {
					console.log(err.message)
					const errorPayload = {
						message: err.response.data.error.message,
						code: err.message,
					}
					context.commit('setError', errorPayload)
				})
		},
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
					console.log(err.message)
					const errorPayload = {
						message: err.response.data.error.message,
						code: err.message,
					}
					context.commit('setError', errorPayload)
				})
		},
		logout(context) {
			const payload = {
				token: null,
				userId: null,
				tokenExpiration: null,
			}
			context.commit('setUser', payload)
		},
	},
	getters: {
		userId(state) {
			return state.userId
		},
		token(state) {
			return state.token
		},
		isAuthenticated(state) {
			return !!state.token
		},
		showError(state) {
			const error = { message: state.errorMessage, code: state.errorCode }
			return error
		},
	},
}

export default authModule
