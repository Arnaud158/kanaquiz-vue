import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

export const localStorageVersion: number = 1

const pinia = createPinia()
const app = createApp(App)

app.use(i18n)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)

app.mount('#app')
