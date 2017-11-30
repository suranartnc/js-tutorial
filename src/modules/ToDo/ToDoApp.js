import React from 'react'
import { Provider, connect } from 'react-redux'

import store from './store/ToDoStore'

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

class ToDoContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'LOAD_TODOS',
      api: {
        url: 'http://myaday.net/pop/api.php'
      }
    })
  }

  removeTodo = id => () => {
    this.props.dispatch({
      type: 'REMOVE_TODO',
      id
    })
  }

  completeTask = id => () => {
    this.props.dispatch({
      type: 'COMPLETE_TODO',
      id
    })
  }

  clearCompleted = () => {
    this.props.dispatch({
      type: 'CLEAR_COMPLETE_TODO'
    })
  }

  toggleCheckAll = () => {
    this.props.dispatch({
      type: 'COMPLETE_ALL_TODO'
    })
  }

  submitToDo = title => {
    if (title.trim() === '') {
      this.props.dispatch({
        type: 'ADD_NOTI',
        notis: [
          {
            message: 'Please entry the title.'
          }
        ]
      })
    } else {
      this.props.dispatch({
        type: 'CREATE_TODO',
        title
      })
    }
  }

  filterTasks = filter => () => {
    this.props.dispatch({
      type: 'SET_FILTER',
      filter
    })
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

const ConnectedToDoContainer = connect(({ todos, filter, notis }) => ({
  todos,
  filter,
  notis
}))(ToDoContainer)

export default function ToDoAppWithRedux() {
  return (
    <Provider store={store}>
      <ConnectedToDoContainer />
    </Provider>
  )
}
