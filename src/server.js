import express from 'express'
import ReactDOM from 'react-dom/server'
import App from './app'

const port = 8080
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', function(req, res) {
  const content = ReactDOM.renderToString(App)

  const html = `
    <html>
      <head>
        <title>JavaScript Tutorial</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})
