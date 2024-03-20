import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar, SessionStorage } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const promise = createApp(App)

promise.use(router);
promise.use(Quasar, {
  plugins: {
    SessionStorage,
  }, // import Quasar plugins and add here
})

promise.mount('#app')
