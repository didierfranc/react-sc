const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    resolve(__dirname, './example/basic/hot'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: '/',
  },
  context: resolve(__dirname, './example/basic'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          resolve(__dirname, './example/basic'),
          resolve(__dirname, './src'),
        ],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
  ],
  performance: { hints: false },
  node: {
    fs: 'empty',
  },
}
