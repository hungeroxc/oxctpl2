const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const { APP_ENV } = require('./constants')
const { resolve, assetsPath } = require('./utils')

const basePlugins = [
    new webpack.DefinePlugin({
        'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV)
    }),
    new TypedCssModulesPlugin({
        globPattern: 'src/!(styles)/**/*.scss'
    }),
    new ForkTsCheckerWebpackPlugin({
        typescript: { configFile: resolve('tsconfig.json') },
        eslint: { enabled: true, files: resolve('src/**/*.{ts,tsx}') }
    })
]

const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'build/tpl/index.html',
        inject: true
    }),
    new CaseSensitivePathsPlugin()
]

const prodPlugins = [
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, `./../dist/${APP_ENV}/index.html`),
        template: 'build/tpl/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        }
    }),
    new MiniCssExtractPlugin({
        filename: assetsPath('css/[name].[contenthash].css'),
        chunkFilename: assetsPath('css/[name].[id].[contenthash].css'),
        ignoreOrder: true
    })
]

// if (config.bundleAnalyzerReport) {
//     const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
//     prodPlugins.push(new BundleAnalyzerPlugin())
// }

module.exports = basePlugins.concat(APP_ENV === 'dev' ? devPlugins : prodPlugins)
