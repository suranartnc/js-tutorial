var express = require('express')

var port = 8080
var app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', function(req, res) {
  var html =
    '<html>\
      <head>\
      </head>\
      <body>\
        <div id="root"></div>\
        <script src="./client.bundle.js"></script>\
      </body>\
    </html>'

  res.send(html)
})
