import './assets/animations.css'
import './assets/bootstrap.min.css'
import './assets/magnific-popup.css'
import './assets/main.css'
import './assets/normalize.css'
import './assets/owl.carousel.css'
import './assets/perfect-scrollbar.css'

import de from './i18n/de.json'
import en from './i18n/en.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: de,
    en: en,
  },
})

const app = createApp(App).use(createPinia()).use(router).use(i18n)

app.mount('#app')
