import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@popperjs/core/dist/umd/popper'
// import '@popperjs/core/dist/umd/poppers.min.js'
import 'jquery/src/jquery.js'
import 'jquery/dist/jquery.min.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './registerServiceWorker'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'


createApp(App).use(router).mount('#app')

