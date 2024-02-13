import { createApp } from 'vue'
import '../src/assets/style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'
import router from './router.js'
import store from '../src/stores/store.js'
import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primeicons/primeicons.css'

//Global  components
import BaseCard from '../src/components/ui/BaseCard.vue'
import BaseButton from '../src/components/ui/BaseButton.vue'
import BaseBadge from '../src/components/ui/BaseBadge.vue'
import BaseSpinner from '../src/components/ui/BaseSpinner.vue'

const app = createApp(App)

app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('BaseSpinner', BaseSpinner)

app.use(store)
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: Lara })
app.mount('#app')
