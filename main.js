import Vue from 'vue'
import App from './App'
import './assets/style/index.scss'
import subPage from './components/sub-page.vue'
//import axios from 'axios';
import mapContent from './components/map-content.vue'
import uniRequest from 'uni-request';
import * as api from './store/api' 
import store from './store/index.js'



Vue.component('sub-page', subPage)
Vue.component('map-content', mapContent)
Vue.prototype.$api = api
Vue.prototype.$store = store



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
