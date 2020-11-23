const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const { assetsPath, resolve } = require('./utils')
const { FILE_EXTENSIONS, APP_ENV, IS_DEV } = require('./constants')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const plugins = require('./plugins')
const optimization = require('./optimization')
require('./cleanFolder')

const STATICDOMAIN = APP_ENV === 'prod' ? '.' : ''

/**
 * @type {import('webpack').Configuration}
 */
const conf = {
    mode: process.env.NODE_ENV,
    entry: { app: ['./src/index.tsx'] },
    output: {
        path: path.resolve(__dirname, `./../dist/${APP_ENV}`),
        filename: APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[contenthash].js'),
        chunkFilename: APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[id].[contenthash].js'),
        publicPath: IS_DEV ? '/' : `${STATICDOMAIN}/`,
        pathinfo: false
    },
    stats: 'minimal',
    resolve: {
        extensions: FILE_EXTENSIONS,
        plugins: [
            new TsconfigPathsPlugin({
                configFile: resolve('tsconfig.webpack.json'),
                extensions: FILE_EXTENSIONS
            })
        ]
    },
    module: {
        rules: [...jsRules, ...styleRules, ...fileRules]
    },
    plugins,
    optimization,
    target: 'web',
    devtool: APP_ENV === 'dev' ? 'eval-source-map' : APP_ENV === 'prod' ? 'source-map' : false,
    devServer: {
        historyApiFallback: true
    }
}

module.exports = conf
