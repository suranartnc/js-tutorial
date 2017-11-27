import React from 'react'
import { createStore, combineReducers as combineStateUpdater } from 'redux'
import { Provider, connect } from 'react-redux'

class Counter extends React.Component {
  increaseCount = () => {}

  decreaseCount = () => {}

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

export default function CounterApp() {
  return <Counter count={0} />
}
