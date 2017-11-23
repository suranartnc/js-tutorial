import React, { Component } from 'react'
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

class ToDoForm extends Component {
  state = {
    title: ''
  }
  handleTitleChanged = event => {
    this.setState({
      title: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      title: ''
    })
    this.props.submitToDo(this.state.title)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={styles.todoInput}
            type="text"
            placeholder="Enter your task here..."
            value={this.state.title}
            onChange={this.handleTitleChanged}
          />
        </form>
        <button style={styles.footerFilters.button}>Check all</button>
      </div>
    )
  }
}

function ToDoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map(function(todo) {
        return <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      })}
    </ul>
  )
}

function ToDoItem({ todo, removeTodo }) {
  return (
    <li style={styles.todoItem}>
      <input type="checkbox" style={styles.todoItemCheckBox} />
      <span>{todo.title}</span>
      <button onClick={removeTodo} style={styles.todoItemDelete}>
        X
      </button>
    </li>
  )
}

function ToDoApp({ todos, submitToDo, removeTodo }) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <div style={styles.app}>
          <ToDoForm submitToDo={submitToDo} />
          <ToDoList todos={todos} removeTodo={removeTodo} />
          <ToDoFooter />
        </div>
      </div>
    </div>
  )
}

export default class ToDoContainer extends React.Component {
  state = {
    todos: []
  }

  removeTodo = () => {
    console.log('remove')
  }

  submitToDo = title => {
    this.setState({
      todos: this.state.todos.concat([
        {
          id: new Date().getTime(),
          title,
          completed: false
        }
      ])
    })
  }

  render() {
    return (
      <ToDoApp
        todos={this.state.todos}
        submitToDo={this.submitToDo}
        removeTodo={this.removeTodo}
      />
    )
  }
}
