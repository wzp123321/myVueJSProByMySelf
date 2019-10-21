import Vue from "vue";
import App from "./app.vue";

// 引入路由文件
import router from "./router/index.js";
// 引入iconfont
import "./assets/css/iconfont.css"

// 引入ant-design-vue
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
Vue.use(Antd);
// 引入顶部进度条依赖nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 测试loading插件
import myLoading from './plugins/newloading/index'
Vue.use(myLoading)

// 配置NProgress进度条选项  —— 动画效果
NProgress.configure({ ease: 'ease', speed: 500 })


router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(transition => {
    NProgress.done();
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")