module.exports = {
  entry: {
    app: [
      "babel-polyfill",
      "./src/client.js"
    ]
  },
  output: {
    path: __dirname + '/public/dist',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  externals: {
    window: 'window'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
