import Vue from 'vue'
import Vuex from 'vuex'
import letter from './modules/letter'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        letter,
        products,
        cart
    },
    strict: debug,
})