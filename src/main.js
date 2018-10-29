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
import cart from './store.bak/modules/cart'

import store from './store'
// import hljs from 'highlight.js';
// import 'highlight.js/styles/googlecode.css' //样式文件
// Vue.directive('highlight', function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block) => {
//         hljs.highlightBlock(block)
//     })
// })
const products = {
    state: {
        all: [
            { name: '鼠标', price: 20 },
            { name: '键盘', price: 40 },
            { name: '耳机', price: 60 },
            { name: '显示屏', price: 80 }
        ]
    },
    mutations: {
        minusPrice(state, payload) {
            let newPrice = state.all.forEach(product => {
                product.price -= payload
            })
        }
    }
}
const mutations = {
        addNum(state) {
            state.num++
        },
    }
    // console.log('store = ', store)
    // store.modules.products = products
    // const cart = {
    //     state: {
    //         num: 1,
    //     },
    //     mutations
    // }

// const store = new Vuex.Store({
//     modules: {
//         products,
//         cart
//     }
//     // state: {
//     //     products: [
//     //         { name: '鼠标', price: 20 },
//     //         { name: '键盘', price: 40 },
//     //         { name: '耳机', price: 60 },
//     //         { name: '显示屏', price: 80 }
//     //     ]
//     // },
//     // getters: {
//     //     saleProducts: (state) => {
//     //         let saleProducts = state.products.map(product => {
//     //             return {
//     //                 name: product.name,
//     //                 price: product.price / 2
//     //             }
//     //         })
//     //         return saleProducts;
//     //     }
//     // },
//     // mutations: {
//     //     minusPrice(state, payload) {
//     //         let newPrice = state.products.forEach(product => {
//     //             product.price -= payload
//     //         })
//     //     }
//     // }
// })
Vue.use(Vuex)

Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})