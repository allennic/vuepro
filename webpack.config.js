var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");
module.exports =
{
    entry:
    {
        "index":[__dirname+'/src/jssrc/index.js',
            'webpack-dev-server/client?http://127.0.0.1:8080'],

    },
    output: {
        publicPath: "http://127.0.0.1:8080/",
        path: __dirname+'/src/webapp/js',  //输出文件夹
        filename:'[name].js'   //最终打包生成的文件名(just 文件名，不带路径的哦)
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    externals: {

    },
    module:{
        loaders:[
            {test:/\.js$/,loader:"babel-loader",query:{compact:true}},
            // {test:/\.vue$/,loader:"babel-loader!vue", exclude: "/node_modules/"},
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,loader:"file-loader" },
            {test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, loader:"file-loader", query: {name: '[name].[ext]?[hash]'}}


            //这里肯定要加入n个loader 譬如vue-loader、babel-loader、css-loader等等
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            //filename: __dirname+'/src/webapp/index.html',//目标文件
            filename:"index.html",
            template: __dirname+'/src/html/index.html',//模板文件
            inject:'body',
            hash:true,
            chunks:["index"]
        })

    ]

}
