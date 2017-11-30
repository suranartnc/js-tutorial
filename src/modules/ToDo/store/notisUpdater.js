const emptyList = []

export default function notisUpdater(state = emptyList, action) {
  const { type } = action

  switch (type) {
    case 'ADD_NOTI':
      return state.concat(action.notis)

    case 'CLEAR_ALL_NOTIS':
    case 'CREATE_TODO':
      return emptyList

    default:
      return state
  }
}
