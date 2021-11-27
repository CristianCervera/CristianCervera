import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { state, actions } from '@/store';

import './assets/css/main.css';
import '@mdi/font/css/materialdesignicons.min.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

const http = axios.create();


http.interceptors.request.use(
    (config) => {
        let token = state.token
        if (token) {
            config.headers['Authorization'] = `Bearer ${ token }`;
        }
        return config;
    },
    (error) => { return Promise.reject(error) }
);


Vue.use(VueAxios, http);
Vue.axios.defaults.baseURL = process.env.VUE_APP_BASEURL

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

const moment = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'), {moment});

import VCalendar from 'v-calendar';
Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
