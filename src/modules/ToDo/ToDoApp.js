import React from 'react'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles, { globalStyles } from './ToDoStyles'

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

  removeTodo = id => () => {
    this.setState({
      todos: this.state.todos.filter(function(todo) {
        return todo.id !== id
      })
    })
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
