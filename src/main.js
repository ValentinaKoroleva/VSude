import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/src/jquery.js'
import 'jquery/dist/jquery.min.js'

import './registerServiceWorker'

createApp(App).use(router).mount('#app')

