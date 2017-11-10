import express from 'express'

import { renderToString } from './utils/output'
import renderApp from './app'

const port = 8080
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', function(req, res) {
  renderApp().then(content => {
    const html = renderToString(content)
    res.send(html)
  })
})
