import { createStore, combineReducers, applyMiddleware } from 'redux'
import apiFetcher from './middlewares/apiFetcher'

const reducer = combineReducers({
  entries: function (state = [], action) {
    switch (action.type) {
      case 'ENTRIES_SET':
        return action.data
      default:
        return state
    }
  },
  entry: function (state = {}, action) {
    switch (action.type) {
      case 'ENTRY_SET':
        return action.data
      default:
        return state
    }
  }
})

const enhancer = applyMiddleware(apiFetcher)

export default (initialState = {}) => createStore(reducer, initialState, enhancer)

