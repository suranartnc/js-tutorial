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
      case 'XXX':
        return state
      default:
        return state
    }
  },
  entryDetail: function(state = {}, action) {
    switch (action.type) {
      case 'YYY':
        return state
      default:
        return state
    }
  }
})

const enhancer = applyMiddleware(apiFetcher, logger)

export default createStore(rootStateUpdater, enhancer)
