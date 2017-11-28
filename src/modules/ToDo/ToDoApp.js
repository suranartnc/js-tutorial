import React from 'react'

import ToDoNotis from './TodoNotis'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles, { globalStyles } from './ToDoStyles'

function ToDoApp({
  todos = [],
  filter = [],
  notis = [],
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
  removeTodo = id => () => {
    console.log('removeTodo id', id)
  }

  completeTask = id => () => {
    console.log('completeTask id', id)
  }

  clearCompleted = () => {
    console.log('clearCompleted')
  }

  toggleCheckAll = () => {
    console.log('toggleCheckAll')
  }

  submitToDo = title => {
    console.log('submitToDo', title)
  }

  filterTasks = filter => () => {
    console.log('filterTasks', filter)
  }

  render() {
    return (
      <ToDoApp
        todos={this.props.todos}
        filter={this.props.filter}
        notis={this.props.notis}
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
