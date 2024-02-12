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
					console.log(err.message)
					const errorPayload = {
						message: err.response.data.error.message,
						code: err.message,
					}
					context.commit('setError', errorPayload)
				})
		},
	},
	getters: {
		userId(state) {
			return state.userId
		},
		showError(state) {
			const error = { message: state.errorMessage, code: state.errorCode }
			return error
		},
	},
}

export default authModule
