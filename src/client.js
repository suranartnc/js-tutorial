import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './modules/Blog/redux/createStore'
import App from './app'

const container = document.getElementById('root')

ReactDOM.hydrate(
  <Provider store={createStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  container
)
