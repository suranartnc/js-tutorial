import { createStore, combineReducers as combineStateUpdater } from 'redux'

const emptyList = []

function todosUpdater(state = emptyList, action) {
  const { type } = action

  switch (type) {
    case 'CREATE_TODO':
      return state.concat([
        {
          id: new Date().getTime(),
          title: action.title,
          completed: false
        }
      ])

    case 'REMOVE_TODO':
      return state.filter(function(todo) {
        return todo.id !== action.id
      })

    case 'COMPLETE_TODO':
      return state.map(function(todo) {
        if (todo.id === action.id) {
          todo.completed = true
        }
        return todo
      })

    case 'COMPLETE_ALL_TODO':
      return state.map(function(todo) {
        todo.completed = true
        return todo
      })

    case 'CLEAR_COMPLETE_TODO':
      return state.filter(function(todo) {
        return !todo.completed
      })

    default:
      return state
  }
}

function filterUpdater(state = 'all', action) {
  const { type } = action

  switch (type) {
    case 'SET_FILTER':
      return action.filter

    default:
      return state
  }
}

function notisUpdater(state = emptyList, action) {
  const { type } = action

  switch (type) {
    case 'ADD_NOTI':
      return state.concat(action.notis)

    case 'CREATE_TODO':
      return emptyList

    default:
      return state
  }
}

const store = createStore(
  combineStateUpdater({
    todos: todosUpdater,
    filter: filterUpdater,
    notis: notisUpdater
  })
)

export default store
