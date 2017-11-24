import React from 'react'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles, { globalStyles } from './ToDoStyles'

function ToDoApp({
  todos,
  submitToDo,
  removeTodo,
  completeTask,
  clearCompleted
}) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <div style={styles.app}>
          <ToDoForm submitToDo={submitToDo} />
          <ToDoList
            todos={todos}
            removeTodo={removeTodo}
            completeTask={completeTask}
          />
          <ToDoFooter todos={todos} clearCompleted={clearCompleted} />
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

  completeTask = id => () => {
    this.setState({
      todos: this.state.todos.map(function(todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(function(todo) {
        return todo.completed === false
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
        completeTask={this.completeTask}
        clearCompleted={this.clearCompleted}
      />
    )
  }
}
