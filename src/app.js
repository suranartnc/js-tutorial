import React from 'react'

import TimerApp from './modules/Timer/TimerApp'
import DictApp from './modules/Dictionary/DictApp'
import ToDoApp from './modules/ToDo/ToDoApp'

function Link({ to, transitionTo, children }) {
  return (
    <a href={to} onClick={transitionTo(to)}>
      {children}
    </a>
  )
}

function Route({ path, location, component: Component }) {
  return <div>{path === location && <Component />}</div>
}
class AppLauncher extends React.Component {
  state = {
    location: '/'
  }

  transitionTo = url => e => {
    e.preventDefault()

    history.pushState({}, '', url)

    this.setState({
      location: url
    })
  }

  componentDidMount() {
    this.setState({
      location: window.location.pathname
    })
  }

  render() {
    const { location } = this.state

    return (
      <div>
        <nav>
          <Link to="/dictionary" transitionTo={this.transitionTo}>
            Dictionary
          </Link>
          <Link to="/timer" transitionTo={this.transitionTo}>
            Timer
          </Link>
          <Link to="/todo" transitionTo={this.transitionTo}>
            To-Do
          </Link>
        </nav>
        <div>
          <Route path="/todo" component={ToDoApp} location={location} />
          <Route path="/dictionary" component={DictApp} location={location} />
          <Route path="/timer" component={TimerApp} location={location} />
        </div>
      </div>
    )
  }
}

function App() {
  return <AppLauncher />
}

export default App
