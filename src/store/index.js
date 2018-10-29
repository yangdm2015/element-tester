import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store.bak/modules/cart'
// import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        cart
    }
})
export default store