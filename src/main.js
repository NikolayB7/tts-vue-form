import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'element-plus/dist/index.css'
import './style.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app
    .use(ElementPlus)
    .use(autoAnimatePlugin)
    .mount('#app')
