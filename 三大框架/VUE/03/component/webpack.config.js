
// 引入路径模块
var path = require('path')

// 插件的引入
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 另一个不用的插件引入演示
var webpack = require('webpack')

// 导出配置信息的对象，外部可以访问到
module.exports = {
    // 1.入口出口
    // 入口（设置导入的文件路径）
    entry: './src/main.js',
    // 出口（设置文件的导出路径）
    output: { 
        // 处理成绝对路径
        path: path.join(__dirname + '/dist'),
        filename: 'hebing.js'
    },
    // 2.加载器
    // 添加加载器(对文件导入之前的预处理操作)
    module: { //全部加载器都放在这个module集合中
        rules: [
            // 配置解析.vue文件的加载器
            {
                test: /\.vue$/, //匹配以.vue结尾的文件
                use: 'vue-loader'
            },
            // 配置解析.css文件的加载器
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 处理图片的加载器
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                /*
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25000 //写多少都可以，单位是1bit（位）；而1kb的b是byte（字节）；1byte=8bit
                            // 若这个图片大于配置规定值3kb，会把图片名在vue内加载
                            // 若这个图片小于配置规定值3kb，而是会把图片转换为base64位的字符串，然后把字符串赋给vue内进行加载
                            // 一个页面的上小图特别多，请求就会多，精灵图解决也不太好（维护成本高，浏览器兼容性也不好），所以用此方法
                            // 就是说在加载图片之前判断图片的大小，如果这个图小（把整个图片变成base64位的字符串，直接放到css里面，请求css的时候会把这个字符串也请求回来，不会再次遇到图片再发请求，就是随着css一起请求回来加载图片；如果判断图大，那就单独请求一次）
                        }
                    }
                ]
                */
                use: ['url-loader?limit=2500', 'file-loader']

            },
            // 和上面的基本一样, 所以我们把它们重合在一起
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {}
            //         }
            //     ]
            // }

            /*
            // babel-loader 用于把es6语法 转为 es5语法
            npm install babel-loader babel-core babel-preset-env webpack
            {
                test: /\.js$/,
                // 不包含
                exclude: /(node_modules|bower_components)/,
                // 如果有一定要检索的 用包含
                // include: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
            */
        ]
    },

    // webpack-dev-server的一些配置信息
    devtool: 'eval',
    devServer: {
        contentBase: __dirname + '/src', // 当前服务器监听的路径
        hot: true,  // 热更新
        port: 8081,  // 定义端口号
        host: 'localhost',
        open: true,    // 是否自动打开浏览器
        openPage: ''
    },
    //IP+Port(端口号) = Socket
    
    // 3.webpack中的插件添加（这个插件需要三步）
    plugins: [
        // 自动生成html文件（最后才用）
        new HtmlWebpackPlugin({
            template: './src/index.html',//把它作为模板，坑也会进来（因为是模板的一部分）
            htmlWebpackPlugin: {
                "files": {//想要在html里引入什么文件
                    "css": [""],
                    "js": ["hebing.js"]
                }
            },
            // 压缩 情怀至上（可有可无）
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),


        // // 压缩的插件,但是我们一般不用,用-p //webpack自带插件无需安装
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
    ]



}