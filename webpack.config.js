const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: resolve(__dirname, './src')
  },
  output: {
    libraryTarget: 'umd',
    filename: 'dist/react-sc.js',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, './src')],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
}
