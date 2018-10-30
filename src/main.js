import Vue from 'vue'
// import Vue from 'vue/dist/vue.runtime.common.js'
// import Vue from 'vue/src/core/instance/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router.js"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Vuex from 'vuex'

import store from './store'
import { currency } from './utils/currency'

Vue.filter('currency', currency)
Vue.use(Vuex)

Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})