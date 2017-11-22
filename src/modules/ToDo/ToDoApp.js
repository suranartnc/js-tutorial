import React from 'react'
import styles, { globalStyles } from './ToDoStyles'

function ToDoFooter() {
  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>0 items left</p>
      <ToDoFooterFilters />
      <button style={styles.footerFilters.button}>Clear completed</button>
    </div>
  )
}

function ToDoFooterFilters() {
  return (
    <div style={styles.footerFilters.container}>
      <button style={styles.footerFilters.button}>All</button>
      <button style={styles.footerFilters.button}>Active</button>
      <button style={styles.footerFilters.button}>Completed</button>
    </div>
  )
}

function ToDoForm() {
  return (
    <div>
      <form action="">
        <input
          style={styles.todoInput}
          type="text"
          placeholder="Enter your task here..."
        />
      </form>
      <button style={styles.footerFilters.button}>Check all</button>
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
    <li style={styles.todoItem}>
      <input type="checkbox" style={styles.todoItemCheckBox} />
      <span>{todo.title}</span>
      <button style={styles.todoItemDelete}>X</button>
    </li>
  )
}

function ToDoApp({ todos }) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <div style={styles.app}>
          <ToDoForm />
          <ToDoList todos={todos} />
          <ToDoFooter />
        </div>
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
          title: 'Task 1'
        },
        {
          title: 'Task 2'
        },
        {
          title: 'Task 3'
        }
      ]
    }
  }

  render() {
    return <ToDoApp todos={this.state.todos} />
  }
}
