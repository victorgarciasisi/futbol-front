import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// Config url base api for axios
axios.defaults.baseURL = 'http://localhost:8080/futbol-back/public/api';
//axios.defaults.baseURL = 'http://backend:80/futbol-back/public/api';

createApp(App).use(router).mount('#app');
