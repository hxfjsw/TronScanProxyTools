import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

 console.log("NODE_ENV",process.env.NODE_ENV)

import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;
axios.defaults.headers.post['Content-Type'] = 'application/json';

app.use(ElementPlus)
app.mount('#app')
