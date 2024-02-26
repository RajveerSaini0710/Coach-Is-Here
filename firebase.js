// firebase.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
	apiKey: 'AIzaSyDMt40w_cjbrbwzt2Kjf2dx2VIJM4Lx8NE',
	authDomain: 'coach-is-here.firebaseapp.com',
	databaseURL: 'https://coach-is-here-default-rtdb.firebaseio.com',
	projectId: 'coach-is-here',
	storageBucket: 'coach-is-here.appspot.com',
	messagingSenderId: '1057806380229',
	appId: '1:1057806380229:web:c4b57db4d93726361354ac',
	measurementId: 'G-GF30Z5L1ZV',
}
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { auth, firebaseApp, sendPasswordResetEmail }
