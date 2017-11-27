import React from 'react'
import { createStore, combineReducers as combineStateUpdater } from 'redux'
import { Provider, connect } from 'react-redux'

// View //
class Counter extends React.Component {
  increaseCount = () => {
    this.props.dispatch({
      type: 'INCREASE'
    })
  }

  decreaseCount = () => {
    this.props.dispatch({
      type: 'DECREASE'
    })
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

// Store & State Updater //
function countUpdater(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1

    case 'DECREASE':
      return state - 1

    default:
      return state
  }
}

const rootStateUpdater = combineStateUpdater({
  count: countUpdater

  // Add more state here...
  // moreStateKey: moreStateUpdater
})

const store = createStore(rootStateUpdater)

// Connector & stateSelector //
function stateSelector(state) {
  return {
    count: state.count
  }
}

const ConnectedCounter = connect(stateSelector)(Counter)

export default function CounterApp() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  )
}
