import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

const container = document.getElementById('root')

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  container
)
