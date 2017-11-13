var path = require('path')

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config
