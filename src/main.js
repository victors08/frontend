import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar, Cookies } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Maska from 'maska'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2KPl1tC8VOfYKnTadRzKUlUsyya4R-YQ",
  authDomain: "vue-auth-frontend.firebaseapp.com",
  projectId: "vue-auth-frontend",
  storageBucket: "vue-auth-frontend.appspot.com",
  messagingSenderId: "223491441327",
  appId: "1:223491441327:web:3087e1a0bc368b13fc0a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(Maska).use(Quasar, {plugins: {Cookies}}, quasarUserOptions).use(store).use(router).mount('#app')
