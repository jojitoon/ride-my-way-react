const path = require('path');
const autoprefixer = require('autoprefixer');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    compress: true,
    hot: true
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
