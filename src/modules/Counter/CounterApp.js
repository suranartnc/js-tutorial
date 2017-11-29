import React from 'react'
import { createStore, combineReducers as combineStateUpdater } from 'redux'
import { Provider, connect } from 'react-redux'

import { updateCount } from './CounterActions'

const initailCount = 0

function countUpdater(state = initailCount, action) {
  const { type, number } = action

  switch (type) {
    case 'INCREASE':
      return state + number

    case 'DECREASE':
      if (state - number < 0) {
        return 0
      }
      return state - number

    default:
      return state
  }
}

const rootStateUpdater = combineStateUpdater({
  count: countUpdater
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
        <p>{this.props.count}</p>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    )
  }
}

function stateSelector(state) {
  return {
    count: state.count
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
