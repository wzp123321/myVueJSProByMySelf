import Vue from "vue";
import App from "./app.vue";
// 引入路由文件
import router from "./router/index.js";


// 引入ant-design-vue
import 'ant-design-vue/dist/antd.css';


new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")
