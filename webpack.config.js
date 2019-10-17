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
            }
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