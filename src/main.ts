import './assets/animations.css'
import './assets/bootstrap.min.css'
import './assets/magnific-popup.css'
import './assets/main.css'
import './assets/normalize.css'
import './assets/owl.carousel.css'
import './assets/perfect-scrollbar.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(createPinia()).use(router)

app.mount('#app')
