import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// Config url base api for axios
axios.defaults.baseURL = 'http://localhost/futbol-back/public/api';

createApp(App).use(router).mount('#app');
