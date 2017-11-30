const emptyList = []

export default function todosUpdater(state = emptyList, action) {
  const { type } = action

  switch (type) {
    case 'LOAD_TODOS':
      return action.data.data.slice(0, 5).map(function(todo) {
        return {
          id: todo.cat_id,
          title: todo.cat_name,
          completed: false
        }
      })

    case 'CREATE_TODO':
      return [
        {
          id: new Date().getTime(),
          title: action.title,
          completed: false
        }
      ].concat(state)

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
      if (
        state.filter(function(todo) {
          return !todo.completed
        }).length === 0
      ) {
        return state.map(function(todo) {
          todo.completed = false
          return todo
        })
      }

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
