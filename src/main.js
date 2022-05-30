import { createApp } from 'vue'
import store from './store'
import router from './router'
import './index.css'
import naive from 'naive-ui'
import VueCookies from 'vue-cookies'
import App from './App.vue'

createApp(App).use(store).use(router).use(naive).use(VueCookies).mount('#app')
