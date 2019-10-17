import Vue from "vue";
import Router from "vue-router";

// 引入模块
import Views from "../views/index.vue";

const News = resolve=>require(['../news/index.vue'],resolve)

Vue.use(Router);

const routes = [
    {
        path:"/view",
        name:"views",
        component:Views
    },{
        path:"/news",
        name:"news",
        component:News
    },
  ];
  
  const router = new Router({routes});

  export default  router


