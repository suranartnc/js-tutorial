export default function filterUpdater(state = 'all', action) {
  const { type } = action

  switch (type) {
    case 'SET_FILTER':
      return action.filter

    default:
      return state
  }
}
