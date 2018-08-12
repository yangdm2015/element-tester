import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import table from "./components/table-wrapper";
import formWrapper from "./components/auth-form-wrapper";
import cascaderWrapper from "./components/cascader/cascader-wrapper"
import router from "./router.js"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
    path: "/table",
    component: table
}, {
    path: "/cascader",
    component: cascaderWrapper
}, {
    path: "/form",
    component: formWrapper
}]

var Router = new VueRouter({
    routes
})
export default Router;