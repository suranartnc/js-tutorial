var path = require('path')

var config = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'client.bundle.js'
  }
}

module.exports = config
