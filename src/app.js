import React from 'react'
import PropTypes from 'prop-types'

import TimerApp from './modules/Timer/TimerApp'
import DictApp from './modules/Dictionary/DictApp'
import ToDoApp from './modules/ToDo/ToDoApp'

class Link extends React.Component {
  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.context.transitionTo(to)}>
        {children}
      </a>
    )
  }
}

Link.contextTypes = {
  transitionTo: PropTypes.func
}

class Route extends React.Component {
  render() {
    const { path, component: Component } = this.props

    return (
      <div>{path === this.context.getCurrentLocation() && <Component />}</div>
    )
  }
}

Route.contextTypes = {
  getCurrentLocation: PropTypes.func
}

class AppLauncher extends React.Component {
  state = {
    location: '/'
  }

  getChildContext() {
    return {
      transitionTo: this.transitionTo,
      getCurrentLocation: this.getCurrentLocation
    }
  }

  transitionTo = url => e => {
    e.preventDefault()

    history.pushState({}, '', url)

    this.setState({
      location: url
    })
  }

  getCurrentLocation = () => {
    return this.state.location
  }

  componentDidMount() {
    this.setState({
      location: window.location.pathname
    })
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/todo">To-Do</Link>
        </nav>
        <div>
          <Route path="/todo" component={ToDoApp} />
          <Route path="/dictionary" component={DictApp} />
          <Route path="/timer" component={TimerApp} />
        </div>
      </div>
    )
  }
}

AppLauncher.childContextTypes = {
  transitionTo: PropTypes.func,
  getCurrentLocation: PropTypes.func
}

function App() {
  return <AppLauncher />
}

export default App
