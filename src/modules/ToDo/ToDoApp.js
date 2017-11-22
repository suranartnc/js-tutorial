import React from 'react'
import styles, { globalStyles } from './ToDoStyles'

function ToDoFooter() {
  return (
    <div>
      <p>0 items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear completed</button>
    </div>
  )
}

function ToDoForm() {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="What needs to be done?" />
      </form>
      <button>Check all</button>
    </div>
  )
}

function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(function(todo) {
        return <ToDoItem todo={todo} />
      })}
    </ul>
  )
}

function ToDoItem({ todo }) {
  return (
    <li>
      <label htmlFor="">
        <input type="checkbox" />
        <span>{todo.title}</span>
        <button>X</button>
      </label>
    </li>
  )
}

function ToDoApp({ todos }) {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <ToDoForm />
        <ToDoList todos={todos} />
        <ToDoFooter />
      </div>
    </div>
  )
}

export default class ToDoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Task 1'
        },
        {
          id: 2,
          title: 'Task 2'
        },
        {
          id: 3,
          title: 'Task 3'
        }
      ]
    }
  }

  render() {
    return <ToDoApp todos={this.state.todos} />
  }
}
