var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const views =Object.keys(baseWebpackConfig.entry);
// add hot-reload related code to entry chunks
views.forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
  
})

console.log(views)
const initHtmlPlugins=()=>{
  return views.map(item=>{
   return new HtmlWebpackPlugin({
      filename:`${item}.html`,
      template:`src/views/${item}.html`,
      inject:true,
      chunks:[item]
    })
  })
}


var plugins =[
new webpack.DefinePlugin({
  'process.env': config.dev.env
}),
// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
new webpack.HotModuleReplacementPlugin(),
new webpack.NoEmitOnErrorsPlugin(),
// https://github.com/ampedandwired/html-webpack-plugin

new FriendlyErrorsPlugin()
]
plugins.push.apply(plugins,initHtmlPlugins());

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: plugins
})


