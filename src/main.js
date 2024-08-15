import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

// if (!window.location.href.includes('login')) {
//     if (localStorage.getItem('token') == null) {
//         window.location.replace('/login')
        
//     }
// }


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')