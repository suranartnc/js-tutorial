var http = require('http')
var port = 8080

var requestHandler = function(req, res) {
  // Generate HTML for web page
  var html =
    '<html>\
      <head>\
      </head>\
      <body>\
        <div id="root"></div>\
        <script src="./client.bundle.js"></script>\
      </body>\
    </html>'

  // Send it to web browsers
  res.write(html)
  res.end()
}

var server = http.createServer(requestHandler)

server.listen(port, function(err) {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
