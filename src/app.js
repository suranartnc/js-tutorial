import React from 'react'

import TimerApp from './modules/Timer/TimerApp'
import DictApp from './modules/Dictionary/DictApp'
import ToDoApp from './modules/ToDo/ToDoApp'

function Link({ to, transitionTo, children }) {
  return (
    <a href="" onClick={transitionTo(to)}>
      {children}
    </a>
  )
}

function Navigation({ transitionTo }) {
  return (
    <div>
      <Link to="dictionary" transitionTo={transitionTo}>
        Dictionary
      </Link>
      <Link to="timer" transitionTo={transitionTo}>
        Timer
      </Link>
      <Link to="todo" transitionTo={transitionTo}>
        To-Do
      </Link>
    </div>
  )
}

function Route({ name, renderComponent, component: Component }) {
  return <div>{name === renderComponent && <Component />}</div>
}
class Router extends React.Component {
  state = {
    renderComponent: 'todo'
  }

  transitionTo = component => e => {
    e.preventDefault()

    this.setState({
      renderComponent: component
    })
  }

  render() {
    const { renderComponent } = this.state

    return (
      <div>
        <Navigation transitionTo={this.transitionTo} />
        <div>
          <Route
            name="todo"
            component={ToDoApp}
            renderComponent={renderComponent}
          />
          <Route
            name="dictionary"
            component={DictApp}
            renderComponent={renderComponent}
          />
          <Route
            name="timer"
            component={TimerApp}
            renderComponent={renderComponent}
          />
        </div>
      </div>
    )
  }
}

function App() {
  return <Router />
}

export default App
