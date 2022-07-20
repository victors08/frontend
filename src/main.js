import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar, Cookies } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Maska from 'maska'

createApp(App).use(Maska).use(Quasar, {plugins: {Cookies}}, quasarUserOptions).use(store).use(router).mount('#app')
