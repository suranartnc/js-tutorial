import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from './app'

const port = 8080
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', function(req, res) {
  const content = ReactDOM.renderToString(<App />)

  const html = `
    <html>
      <head>
        <title>JavaScript Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
          }
          html {
            font-size: 87.5%;
          }
          body {
            font-family: arial, 'sans-serif';
            font-size: 1em;
          }
        </style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})
