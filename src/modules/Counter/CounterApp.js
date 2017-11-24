import React from 'react'
import AppWrapper from '../../components/AppWrapper'

import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

const counterReducer = function(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        count: state.count + 1
      }
    case 'DECREASE':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(reducer)

function Counter({ count, dispatch }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
    </div>
  )
}

function selector(state) {
  return {
    count: state.counter.count
  }
}

const CounterWithState = connect(selector)(Counter)

export default function CounterApp() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <CounterWithState />
      </AppWrapper>
    </Provider>
  )
}
