import React from 'react'
import { createStore, combineReducers as combineStateUpdater } from 'redux'
import { Provider, connect } from 'react-redux'

import { updateCount } from './CounterActions'

function countUpdater(state = 0, action) {
  const { type, number } = action

  switch (type) {
    case 'INCREASE':
      return state + number

    case 'DECREASE':
      if (state === 0) return 0
      return state - number

    default:
      return state
  }
}

const initialErrorState = {
  status: 200,
  message: 'OK'
}

function errorUpdater(state = initialErrorState, action) {
  const { error } = action

  if (error) {
    return error
  }

  return state
}

const rootStateUpdater = combineStateUpdater({
  count: countUpdater,
  error: errorUpdater
})

const store = createStore(rootStateUpdater)

class Counter extends React.Component {
  increaseCount = () => {
    this.props.dispatch(updateCount('INCREASE'))
  }

  decreaseCount = () => {
    this.props.dispatch(updateCount('DECREASE'))
  }

  render() {
    return (
      <div>
        {this.props.error.status !== 200 && (
          <div>{this.props.error.message}</div>
        )}
        <p>{this.props.count}</p>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    )
  }
}

function stateSelector(state) {
  return {
    count: state.count,
    error: state.error
  }
}

const CounterContainer = connect(stateSelector)(Counter)

export default function CounterApp() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  )
}
