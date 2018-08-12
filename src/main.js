// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store/";
import "font-awesome/css/font-awesome.css";
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
