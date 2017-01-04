const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css!postcss!sass'
        })
      },
      {
        test: /(\.png|\.jpg)$/,
        loader: 'url?limit=8000&name=../img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/style.css')
  ],
  devServer: {
    inline:true,
    port: 8008
  },
  watch: true
};