import { createApp } from 'vue'
import '../src/assets/style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'
import router from './router.js'
import store from '../src/stores/store.js'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: Lara })
app.mount('#app')
