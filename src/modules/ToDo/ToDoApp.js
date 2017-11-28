import React from 'react'

import ToDoNotis from './TodoNotis'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles, { globalStyles } from './ToDoStyles'

function ToDoApp({
  todos,
  filter,
  notis,
  submitToDo,
  removeTodo,
  completeTask,
  clearCompleted,
  toggleCheckAll,
  filterTasks
}) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <div style={styles.app}>
          {notis.length > 0 && <ToDoNotis notis={notis} />}
          <ToDoForm submitToDo={submitToDo} toggleCheckAll={toggleCheckAll} />
          <ToDoList
            todos={todos}
            filter={filter}
            removeTodo={removeTodo}
            completeTask={completeTask}
          />
          <ToDoFooter
            todos={todos}
            clearCompleted={clearCompleted}
            filterTasks={filterTasks}
          />
        </div>
      </div>
    </div>
  )
}

export default class ToDoContainer extends React.Component {
  state = {
    notis: [],
    todos: [],
    filter: 'all'
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

  toggleCheckAll = () => {
    const taskNotCompletd = this.state.todos.filter(function(todo) {
      return todo.completed === false
    }).length

    this.setState({
      todos: this.state.todos.map(function(todo) {
        if (taskNotCompletd !== 0) {
          todo.completed = true
        } else {
          todo.completed = false
        }

        return todo
      })
    })
  }

  submitToDo = title => {
    if (title.trim() === '') {
      this.setState({
        notis: this.state.notis.concat([
          {
            message: 'Title must not be empty!'
          }
        ])
      })

      setTimeout(() => {
        this.setState({
          notis: []
        })
      }, 5000)
    } else {
      this.setState({
        notis: [],
        todos: this.state.todos.concat([
          {
            id: new Date().getTime(),
            title,
            completed: false
          }
        ])
      })
    }
  }

  filterTasks = filter => () => {
    this.setState({ filter })
  }

  render() {
    return (
      <ToDoApp
        todos={this.state.todos}
        filter={this.state.filter}
        notis={this.state.notis}
        submitToDo={this.submitToDo}
        removeTodo={this.removeTodo}
        completeTask={this.completeTask}
        clearCompleted={this.clearCompleted}
        toggleCheckAll={this.toggleCheckAll}
        filterTasks={this.filterTasks}
      />
    )
  }
}
