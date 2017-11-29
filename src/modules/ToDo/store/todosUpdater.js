const emptyList = []

export default function todosUpdater(state = emptyList, action) {
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

    case 'CREATE_TODOS':
      return state.concat(
        action.data
          .map(function(repo) {
            return {
              id: Math.floor(Math.random() * 1000) + 1,
              title: repo.name,
              completed: false
            }
          })
          .slice(0, 5)
      )

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
