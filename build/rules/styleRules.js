const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { APP_ENV } = require('./../constants')
const { resolve } = require('./../utils')
const { cacheLoader } = require('./loaders')

const cssLoader = modules => ({
    loader: 'css-loader',
    options: {
        modules: modules
            ? {
                  mode: 'local',
                  localIdentName: '[local]--[contenthash:base64:8]'
              }
            : false
    }
})

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sassOptions: {
            includePaths: [require('bourbon').includePaths, resolve('src/styles')]
        }
    }
}

const lessLoader = {
    loader: 'less-loader',
    options: {
        lessOptions: {
            javascriptEnabled: true
            // modifyVars: theme
        }
    }
}

const baseLoaders = isModules => [
    APP_ENV !== 'dev' ? MiniCssExtractPlugin.loader : 'style-loader',
    cacheLoader,
    cssLoader(isModules)
]

module.exports = [
    {
        test: /\.css$/,
        include: [resolve('node_modules')],
        use: baseLoaders(false)
    },
    {
        test: /\.scss$/,
        include: [resolve('src')],
        use: [...baseLoaders(true), sassLoader]
    },
    {
        // for ant design
        test: /\.less$/,
        // less do not use threadLoader
        // https://github.com/webpack-contrib/thread-loader/issues/10
        use: [...baseLoaders(false), lessLoader]
    }
]
