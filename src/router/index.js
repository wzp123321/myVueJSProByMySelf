import Vue from "vue";
import Router from "vue-router";


// 登录
const Signin = resolve => require(['../pages/signin.vue'], resolve)
// 首页
const Dashboard = resolve => require(['../pages/dashboard.vue'], resolve)
// 404
const NotFound = resolve => require(['../pages/404.vue'], resolve)



Vue.use(Router);

const routes = [{
        path: "/",
        redirect: "/dashaboard"
    },
    {
        path: "/dashaboard",
        component: Dashboard,
        meta:{
            name:"首页"
        }
    },
    {
        path: "/signin",
        component: Signin,
        meta:{
            name:"登录界面"
        }
    },{
        path:"*",
        component:NotFound
    }
];

const router = new Router({
    routes
});


export default router