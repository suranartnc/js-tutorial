import React from 'react'

import ToDoForm from './ToDoForm'
import ToDoFooter from './ToDoFooter'

import styles, { globalStyles } from './ToDoStyles'

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
