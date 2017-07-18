var webpack = require('webpack')
var path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = (file) => path.resolve(__dirname, file)
var config = {
  entry: {
    pages: './src',
    element: ["element-ui", resolve("./theme/index.css")]
  },
  output:  {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   hot: true,
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   publicPath: '/'
  // },
  // module: {
  //   loaders: [{
  //     test: /\.vue$/,
  //     loader: "vue-loader",
  //     options: {
  //       scss: 'style-loader!css-loader!sass-loader',
  //       sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
  //     }
  //   },
  //   {
  //     test: /\.css$/,
  //     loader: [ 'style-loader', 'css-loader', 'resolve-url-loader']
  //   },{
  //     test: /\.scss$/,
  //     loader: ['css-loader', 'postcss-loader', 'sass-loader'],
  //   },{
  //       test: /\.(jpg|jpeg|png|gif|svg)$/,
  //       loader: 'url?limit=8192&name=img/[name].[ext]',
  //       exclude: /node_modules/
  //     },
  //     {
  //       test: /\.(svg|eot|ttf|woff|woff2)\?\w+(#\w+)?$/,
  //       loader: 'url?limit=8192&name=font/[name].[ext]',
  //       exclude: /node_modules/
  //     }]
  // },
  module: {
    rules: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'postcss-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'style-loader!css-loader!sass-loader',
          sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]'
      }
    }]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'vue study webpack',
      filename: 'index.html',
      template: 'index.html',
      chunks: ['pages', 'element']
    }),

    new ExtractTextPlugin("style.[name].[hash].css")
  ]
}

module.exports = config