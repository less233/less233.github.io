'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      usePostCSS: true
    })
  },
  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || 'localhost',
    port: PORT || 8080,
    open: false,
    client: {
      overlay: { warnings: false, errors: true },
      logging: 'warn'
    },
    static: {
      publicPath: '/',
      watch: true
    },
    proxy: {}
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: resolve('favicon.ico'),
      title: 'vue-element-admin',
      templateParameters: {
        BASE_URL: '/static',
      },
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      // devWebpackConfig.plugins.push(
      //   new FriendlyErrorsPlugin({
      //     compilationSuccessInfo: {
      //       messages: [
      //         `Your application is running here: http://${
      //           devWebpackConfig.devServer.host
      //         }:${port}`
      //       ]
      //     },
      //     onErrors: undefined
      //   })
      // )

      resolve(devWebpackConfig)
    }
  })
})
