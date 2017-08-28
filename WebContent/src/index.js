import 'babel-polyfill';
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './routes/'
import vuexConfig from './vuex/'
import './index.css'

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter)

const store = new Vuex.Store(vuexConfig)

new Vue({  
    router,
    store,
    el: "#root",
    render: h => h(App)
})  