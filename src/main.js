import "bootstrap/dist/css/bootstrap.css"
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { store } from './store'
import { routes } from './routes'

import './assets/main.css'

Vue.use(VueRouter);

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
