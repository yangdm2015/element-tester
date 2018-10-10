import Vue from 'vue/dist/vue.runtime.common.js'
// import Vue from 'vue/src/core/instance/index.js'

import VueRouter from "vue-router";

// 引入组件
import tree from "./components/tree/tree";
import table from "./components/table-wrapper";
import formWrapper from "./components/auth/auth-form-wrapper";
import cascaderWrapper from "./components/cascader/cascader-wrapper"
import rt from "./components/render-test/w"
import po from "./components/popover/popover"
import mx from "./components/data-mixin/dataM.vue"
import lo from "./components/listopt"
import formRset from "./components/formRset"
import propsTest from "./components/propsTest"
import computedTest from "./components/computedTest"


import router from "./router.js"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/table",
        component: table
    },
    {
        path: "/cascader",
        component: cascaderWrapper
    },
    {
        path: "/tree",
        component: tree
    }, {
        path: "/rt",
        component: rt
    }, {
        path: "/form",
        component: formWrapper
    }, {
        path: "/po",
        component: po
    }, {
        path: "/mx",
        component: mx
    }, {
        path: "/lo",
        component: lo
    }, {
        path: "/formRset",
        component: formRset
    }, {
        path: "/propsTest",
        component: propsTest
    }, {
        path: "/computedTest",
        component: computedTest
    }
]


var Router = new VueRouter({
    routes
})
export default Router;
