const path    = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      usedExports: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      usedExports: true,
    },
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}
