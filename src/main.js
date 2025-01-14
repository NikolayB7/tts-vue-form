import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'element-plus/dist/index.css'
// import 'element-plus/es/components/date-picker/style/css'
// import 'element-plus/es/components/select/style/css'
import './style.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, {
  locale: ru // Устанавливаем русскую локаль
})
app.use(autoAnimatePlugin, {
  duration: 30000,
  easing: 'ease-in' //linear , ease , ease-in , ease-out , ease-in-out
})
app.mount('#app')
