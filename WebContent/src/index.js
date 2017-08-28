import 'babel-polyfill';
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI);

new Vue({ 
    el: "#root",
    render: h => h(App)
})