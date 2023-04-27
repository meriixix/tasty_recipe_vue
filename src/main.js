import "bootstrap/dist/css/bootstrap.css"
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueSimpleAlert from "vue-simple-alert"
import VueSweetalert2 from "vue-sweetalert2"

import { store } from './store'
import { routes } from './routes'

import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);
Vue.use(VueSimpleAlert)
Vue.use(VueSweetalert2)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

import "bootstrap/dist/js/bootstrap.js";
