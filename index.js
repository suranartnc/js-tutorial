var http = require('http')

http
  .createServer(function(req, res) {
    var result = 'Hello World'
    res.write(result)
    res.end()
  })
  .listen(8080)
