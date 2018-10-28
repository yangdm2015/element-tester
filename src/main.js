import Vue from 'vue/dist/vue.runtime.common.js'
// import Vue from 'vue/src/core/instance/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router.js"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import hljs from 'highlight.js';
// import 'highlight.js/styles/googlecode.css' //样式文件
// Vue.directive('highlight', function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     blocks.forEach((block) => {
//         hljs.highlightBlock(block)
//     })
// })
Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})