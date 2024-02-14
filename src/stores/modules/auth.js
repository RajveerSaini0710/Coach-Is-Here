import axios from 'axios'

let timer

const authModule = {
	state() {
		return {
			userId: null,
			token: null,
			logout: false,
		}
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token
			state.userId = payload.userId
			state.logout = false
		},
		setLogout(state) {
			state.logout = true
		},
	},
	actions: {
		login(context, payload) {
			return context.dispatch('auth', {
				...payload,
				mode: 'login',
			})
		},
		signup(context, payload) {
			return context.dispatch('auth', {
				...payload,
				mode: 'signup',
			})
		},
		async auth(context, payload) {
			const Payload = {
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}
			const mode = payload.mode
			let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMt40w_cjbrbwzt2Kjf2dx2VIJM4Lx8NE'

			if (mode === 'signup') {
				url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMt40w_cjbrbwzt2Kjf2dx2VIJM4Lx8NE'
			}
			await axios
				.post(url, Payload)
				.then((res) => {
					// const expiresIn = 5000
					const expiresIn = +res.data.expiresIn * 1000
					const expirationDate = new Date().getTime() + expiresIn

					localStorage.setItem('token', res.data.idToken)
					localStorage.setItem('userId', res.data.localId)
					localStorage.setItem('expiresIn', expirationDate)

					timer = setTimeout(() => {
						context.dispatch('autoLogout')
					}, expiresIn)

					const payload = {
						token: res.data.idToken,
						userId: res.data.localId,
					}
					context.commit('setUser', payload)
				})
				.catch((err) => {
					const errorPayload = {
						message: err.response.data.error.message,
						code: err.message,
					}
					context.commit('setError', errorPayload)
				})
		},
		autoLogin(context) {
			const token = localStorage.getItem('token')
			const userId = localStorage.getItem('userId')
			const expiresIn = localStorage.getItem('expiresIn')

			const tokenExpiration = +expiresIn - new Date().getTime()

			if (tokenExpiration <= 0) {
				context.dispatch('autoLogout')
				return
			}

			timer = setTimeout(() => {
				context.dispatch('autoLogout')
			}, tokenExpiration)

			if (token && userId) {
				context.commit('setUser', {
					token: token,
					userId: userId,
				})
			}
		},
		logout(context) {
			localStorage.removeItem('token')
			localStorage.removeItem('userId')
			localStorage.removeItem('expiresIn')

			clearTimeout(timer)

			const payload = {
				token: null,
				userId: null,
			}
			context.commit('setUser', payload)
		},
		autoLogout(context) {
			context.dispatch('logout')
			context.commit('setLogout')
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

		autoLogout(state) {
			return state.logout
		},
	},
}

export default authModule
