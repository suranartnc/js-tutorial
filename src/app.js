import React from 'react'

import { Route, Link } from 'react-router-dom'

import TimerApp from './modules/Timer/TimerApp'
import DictApp from './modules/Dictionary/DictApp'
import ToDoApp from './modules/ToDo/ToDoApp'

function AppLauncher() {
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

function App() {
  return <AppLauncher />
}

export default App
