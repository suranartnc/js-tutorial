import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from './app'

const port = 8080
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', function(req, res) {
  const context = {}

  const content = ReactDOM.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  const html = `
    <html>
      <head>
        <title>JavaScript Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
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
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})
