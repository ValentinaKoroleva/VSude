import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './registerServiceWorker'








// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH8B0mLuRLnJaQAV6vSpoxGtGbHsAbqic",
  authDomain: "vsude-a9e86.firebaseapp.com",
  projectId: "vsude-a9e86",
  storageBucket: "vsude-a9e86.appspot.com",
  messagingSenderId: "314180578644",
  appId: "1:314180578644:web:c6e8625aaa69fd84aeecc1",
  measurementId: "G-8Z8PDLV8HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'test')


createApp(App).use(router).mount('#app')

