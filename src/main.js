import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@popperjs/core/dist/umd/popper'
// import '@popperjs/core/dist/umd/poppers.min.js'
// import 'jquery/src/jquery.js'
// import 'jquery/dist/jquery.min.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './registerServiceWorker'

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kB3kS8cSpFszXZq3qhVHR0Yxp6JylSw",
  authDomain: "courtmonitoring-94187.firebaseapp.com",
  projectId: "courtmonitoring-94187",
  storageBucket: "courtmonitoring-94187.appspot.com",
  messagingSenderId: "398802543570",
  appId: "1:398802543570:web:baa1640b13564ca7ca5e0b",
  measurementId: "G-SWVGY6SQJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'test')
createApp(App).use(router).mount('#app')

