import Vue from "vue";
import Router from "vue-router";


// 登录
const Signin = resolve => require(['../pages/signin.vue'], resolve)
// 首页
const Dashboard = resolve => require(['../pages/dashboard.vue'], resolve)
// 404
const NotFound = resolve => require(['../pages/404.vue'], resolve)
// 401
const PageError = resolve => require(['../pages/401.vue'], resolve)



Vue.use(Router);

const routes = [{
        path: "/",
        redirect: "/dashaboard"
    },
    {
        path: "/dashaboard",
        component: Dashboard,
        meta: {
            name: "首页"
        }
    },
    {
        path: "/signin",
        component: Signin,
        meta: {
            name: "登录界面"
        }
    },
    {
        path: "/error/404",
        component: NotFound,
        meta: {
            name: "404页面"
        }
    },
    {
        path: "/error/401",
        component: PageError,
        meta: {
            name: "401页面"
        }
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new Router({
    routes
});


export default router