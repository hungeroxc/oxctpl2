const TerserPlugin = require('terser-webpack-plugin')

const { IS_DEV } = require('./constants.js')

module.exports = IS_DEV
    ? {}
    : {
          runtimeChunk: {
              name: 'manifest'
          },
          splitChunks: {
              // 在首页就有可能加载所有的包，所以忽略权限，全部打包到一个vendor里面
              cacheGroups: {
                  default: false,
                  commons: {
                      test: /[\\/]node_modules[\\/]/,
                      name: 'commons',
                      chunks: 'initial'
                  },
                  antd: {
                      name: 'antd',
                      test: /[\\/]node_modules[\\/](antd)[\\/]/,
                      chunks: 'all',
                      priority: 9
                  },
                  vendor: {
                      name: 'vendor',
                      test: /[\\/]node_modules[\\/](moment|axios)[\\/]/,
                      chunks: 'all',
                      priority: 10
                  }
              }
          },
          minimize: true,
          minimizer: [new TerserPlugin()]
      }
