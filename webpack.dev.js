 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
    contentBase: './dist',
       host: '0.0.0.0',  //  可以设置0.0.0.0 ,这样设置你可以通过127.0.0.1或则localhost去访问
       open: false,       //  项目启动时,会默认帮你打开浏览器
       port: 8088
   },
 });