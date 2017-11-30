import {
  createStore,
  combineReducers as combineStateUpdater,
  applyMiddleware
} from 'redux'

import apiFetcher from '../middlewares/apiFetcher'
import logger from '../middlewares/logger'

import todosUpdater from './todosUpdater'
import filterUpdater from './filterUpdater'
import notisUpdater from './notisUpdater'

const rootStateUpdater = combineStateUpdater({
  todos: todosUpdater,
  filter: filterUpdater,
  notis: notisUpdater
})

const enhancer = applyMiddleware(apiFetcher, logger)
const store = createStore(rootStateUpdater, enhancer)

export default store
