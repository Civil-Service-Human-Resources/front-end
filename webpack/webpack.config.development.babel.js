import path from 'path';
import webpack from 'webpack';
import common from './webpack.config.common.babel';
import merge from 'webpack-merge';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

module.exports = merge(common, {
  watch: true,
  devtool: 'cheap-module-source-map',
  plugins: [
    // More info:
    // https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    // new webpack.SourceMapDevToolPlugin(),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      ENV_PRODUCTION: false
    })
  ]
});