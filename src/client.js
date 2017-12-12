import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './modules/Blog/redux/store'
import App from './app'

const container = document.getElementById('root')

const store = createStore(window.__INITIAL_STATE__)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container
)
