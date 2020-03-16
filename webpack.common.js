 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 // const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].[hash].js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: 'babel-loader'
             },
             {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use: ['vue-style-loader', 'css-loader', 'postcss-loader']
                 // use: ExtractTextPlugin.extract({
                 //   fallback: 'vue-style-loader',
                 //   use: [
                 //     'css-loader',
                 //     'postcss-loader'
                 //   ]
                 // })
             },
             {
                 test: /\.(jpg|jpeg|png|gif|svg)$/,
                 use: {
                     loader: 'url-loader',
                     options: {
                         limit: 10000    // 10Kb
                     }
                 }
             },
             {
                 test: /\.vue$/,
                 exclude: /node_modules/,
                 use: 'vue-loader'
             }
         ]
     },

     plugins: [
         new CleanWebpackPlugin(),
         new VueLoaderPlugin(),
         new HtmlWebpackPlugin({
             template: './index.html',
             // filename: 'test.html',
             title: 'demo',
         }),
         // new ExtractTextPlugin("styles.css")
     ]
 };