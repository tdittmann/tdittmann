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
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: {
      home: {
        title: 'Hello World 👋',
        aboutMe: 'Ich bin Timo Dittmann, Full-Stack Software Engineer mit über zehn Jahren Berufserfahrung in der Entwicklung komplexer Anwendungen. In dieser Zeit habe ich mit einer Vielzahl von Programmiersprachen und Technologien gearbeitet – aktuell liegt mein Fokus auf Vue und Go. Neben meiner praktischen Erfahrung habe ich auch mehrere anerkannte Zertifizierungen erworben, darunter "Oracle Certified Professional – Java SE Programmer" sowie "iSAQB Certified Professional for Software Architecture – Advanced Level".',
      },
    },
    en: {
      home: {
        title: 'Hello World 👋',
        aboutMe: 'I am Timo Dittmann a full-stack software engineer with over ten years of professional experience in the development of complex applications. During this time I have worked with a variety of programming languages and technologies - currently my focus is on Vue and Go. In addition to my practical experience, I have also acquired several recognised certifications, including "Oracle Certified Professional - Java SE Programmer" and "iSAQB Certified Professional for Software Architecture - Advanced Level"',
      },
    },
  },
})

const app = createApp(App).use(createPinia()).use(router).use(i18n)

app.mount('#app')
