# myVueJSProByMySelf
手动配置webpack的vue项目
我们一般创建vue项目都是通过vue-cli脚手架去创建，这次我尝试了通过文档完成所有项目配置包括webpack、ant-design-vue、vue-router、vuex等
项目源码：https://github.com/wzp123321/myVueJSProByMySelf.git
1.新建项目

2.使用vscode打开项目

3.初始化
```
vue init 
如果想省事就直接npm init -y
```
4.安装基本的 npm 包
```
npm install vue vue-loader webpack webpack-cli --save-dev 
```

5.创建文件夹以及文件
![目录.png](https://upload-images.jianshu.io/upload_images/15325248-93942eb6dd01c037.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

6.配置webpack.config.js
在这之前先安装一些依赖
模板解析依赖：
```
npm install vue-template-compiler --save-dev
```
样式依赖:
css-loader:[https://webpack.docschina.org/loaders/css-loader/](https://webpack.docschina.org/loaders/css-loader/)
```
npm i style-loader css-loader --save-dev
```
文件加载依赖
```
npm install file-loader --save-dev
```
解析es6语法依赖:[https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
这是一个webpack插件，可简化HTML文件的创建以服务您的webpack捆绑软件
```
npm i html-webpack-plugin --save-dev
```
现在就可以配置webpack.config.js，如果有什么不清楚的可以参考官网https://webpack.docschina.org/configuration/
```
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry: path.join(__dirname, './src/index.js'),
    // 输出
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
                // 使用vue-loader解析.vue文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 不处理这两个文件夹里的内容
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
             {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                        loader: 'file-loader',
                        options: {},
                    },
                ] ,
            },
        ]
    },
    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        // 用于查找模块的目录
        extensions: ['.js', '.json', '.jsx', '.css'],
        // 使用的扩展名
        alias: {
            // 模块别名列表
            'module': 'new-module',
            // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
            'only-module$': 'new-module',
            // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
            'module': path.resolve(__dirname, 'app/third/module.js'),
            // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
            // 模块别名相对于当前上下文导入
        },
        /* 可供选择的别名语法（点击展示） */
        /* 高级解析选项（点击展示） */
    },
    devServer: {
        host: '127.0.0.1',
        port: '8899',
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // ...
    },
    mode: 'development',
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名称
            template: 'index.html', // 指定用index.html做模版
            inject: 'body' // 指定插入的<script>标签在body底部
        })
    ]
}
```
7.安装解析依赖[https://github.com/webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)
```
npm i webpack-dev-server cross-env --save-dev
```
8.修改package.json文件
```
 "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack --progress --colors",
      "dev": "webpack-dev-server --progress --colors",
      "start": "npm run dev"
  },
```
9.配置babel,创建.babelrc文件
修改webpack.config.js
```
// 配置babel
{
    "presets": [
        ""@babel/preset-env""
    ],
    "plugins": [
        "transform-vue-jsx"
    ]
}
```
如果编译时报错的话可能是因为你没有安装依赖:
```
npm i --save babel-plugin-syntax-jsx
 npm i --save babel-preset-env
 npm install babel-plugin-transform-vue-jsx --save
```

10.主要文件：
app.vue：
```
<template>
    <div>测试</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
```
index.js:
```
import Vue from 'vue';
import App from './App.vue';

new Vue({
    render:h=>h(App)
}).$mount('#app')
```
html文件：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

Vue项目文件夹大致参考
```
—— src
  |—— assets // 项目资源目录
          |——api // 封装ajax请求
	  |—— styles // 样式文件
		  |—— reset.scss // reset css，会在 /src/main.js 中被导入
		  |—— variables.scss // 项目中的变量，混合（mixin）等公有样式变量
		  |—— ...
	  |—— images // 图片
	  |—— fonts // 字体
	  |—— ...
  |—— components // 组件目录
	  |—— layout // 布局相关组件
		  |—— Header.vue // 头部
		  |—— BottomMenu.vue // 底部菜单
		  |—— ...
	  |—— common // 公有组件
	  |—— base // 基础组件
	  |—— ...
  |—— pages // 页面目录
	  |—— user // 用户相关页面
		  |—— Login.vue // 登录页面
		  |—— Register.vue // 注册页面
		  |—— Info.vue // 详情页面
	  |—— order // 订单相关页面
		  |—— List.vue // 订单列表
		  |—— Detail.vue //订单详情
		  |—— ...
	  |—— Home.vue // 主页
          |——mixins 
	  |—— ...
  |—— router // 路由
	  |—— modules // 存放各个模块的路由
		  |—— user.js // 用户模块
		  |—— order.js // 订单模块
	  |—— index.js // 路由主js，整合各个模块，并且还会定义一些全局钩子等其他
  |—— store // 全局状态管理目录
	  |—— mutation-types.js // mutation types
	  |—— index.js // 主js，整合各个模块的
	  |—— actions.js // actions
	  |—— modules // 各个模块的states
		  |—— user.js
		  |—— order.js
  |—— common // 全局工具方法
	  |—— data-format.js // 数据转换
	  |—— http.js // 网络请求
	  |—— ...
  |—— App.vue
  |—— main.js
  |—— init-plugins.js // 依赖的第三方的初始化，会在main.js中引入
```
1.混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
mixins文件夹下可以写各种调用ajax请求方法的方法，然后在需要调用这些方法请求数据的文件中：
```
import getCourseList from '@/pages/mixins/getCouseList';

export default {
  mixins: [getCourseList],
}

 // 调用方法请求列表
  created() {
    this.getAllDemoClass();
  },
```
这里的getCourseList文件中有请求需要的参数以及请求完成之后获取的数据  直接在文件类似this.getAllDemoClass();就能调用方法

2.components通用组件存放文件夹：
在这个文件夹下封装了项目需要的组件  然后在components下的index.js中向外暴露即可 然后在使用组件的文件中引用components即可 
```
//业务组件
export { default as HeadBox } from './layout/head-box';
export { default as FootBox } from './layout/foot-box';


import { HeadBox, FootBox } from '@/pages/components';

components: { HeadBox, FootBox },
```

后续：
1.引入ant-design-vue：
具体引入操作可见官网[https://vue.ant.design/docs/vue/introduce-cn/](https://vue.ant.design/docs/vue/introduce-cn/)
```
npm install ant-design-vue --save
按需引入：
npm install babel-plugin-import --save-dev
```

2.引入Vue Router[https://router.vuejs.org/zh/installation.html](https://router.vuejs.org/zh/installation.html)
```
npm install vue-router
```
路由配置文件：router/index.js
```
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
```

3.引入vuex
```
npm i vuex --save
```
新建store/index.js
```
import Vuex from "vuex";
import Vue from "vue";

const GET_COUNT_ADD = "getcountadd";
const GET_COUNT_REDUCE = "getcountreduce";

Vue.use(Vuex)

const state = {
    count: 1,
};
const getters = {
    count: function (state) {
        return state.count
    }
};
const mutations = {
    [GET_COUNT_ADD](state, data ) {
        state.count += data;
    },
    [GET_COUNT_REDUCE](state, data ) {
        state.count -= data
    }
};

const actions = {
    getCountAdd({
        commit,
        state
    }, data) {
        commit(GET_COUNT_ADD, data);
    },
    getCountReduce({
        commit,
        state
    }, data) {
        commit(GET_COUNT_REDUCE, data);
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store;
```
news/index.vue
```
<template>
    <div>
        <h1>{{count}}</h1>
        <Button @click="getCountAdd(1)">Click Add</Button>
        <Button @click="getCountReduce(1)">Click Reduce</Button>
    </div>
</template>
<script>
import store from "../store/index";
import {mapGetters,mapActions} from "vuex";
import {Button} from "ant-design-vue";
export default {
    store,
    components:{
        Button
    },
    computed:mapGetters(["count"]),
    methods:{
        ...mapActions(['getCountAdd','getCountReduce'])
    }
}
</script>
```

