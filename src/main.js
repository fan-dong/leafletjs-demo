import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill' //兼容IE
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import bus from 'vue-bus'
import echarts from 'echarts'
import qs from 'qs'

import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$qs = qs
Vue.prototype.$bus = bus

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})