import {
  createStore,
  combineReducers as combineStateUpdaters,
  applyMiddleware
} from 'redux'

import apiFetcher from './middlewares/apiFetcher'
import logger from './middlewares/logger'

const rootStateUpdater = combineStateUpdaters({
  entryList: function(state = [], action) {
    switch (action.type) {
      case 'ENTRIES_SET':
        return action.data
      case 'ENTRIES_SET_REQUEST':
        return []
      default:
        return state
    }
  },
  entryDetail: function(state = {}, action) {
    switch (action.type) {
      case 'ENTRY_SET':
        return action.data
      case 'ENTRY_SET_REQUEST':
        return {}
      default:
        return state
    }
  },
  loading: function(state = false, action) {
    if (action.loading !== undefined) return action.loading

    return state
  }
})

const enhancer = applyMiddleware(apiFetcher, logger)

export default createStore(rootStateUpdater, enhancer)
