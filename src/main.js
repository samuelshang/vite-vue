import { createApp } from 'vue'
import App from './App.vue'
import MyPlugin from './components/common'
createApp(App).use(MyPlugin).mount('#app')
