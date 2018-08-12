import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import table from "./components/table-test";
import router from "./router.js"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
    path: "/table",
    component: table
}, ]

var router = new VueRouter({
    routes
})
export default router;