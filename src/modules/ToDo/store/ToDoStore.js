import {
  createStore,
  combineReducers as combineStateUpdater,
  applyMiddleware
} from 'redux'

import todosUpdater from './todosUpdater'
import filterUpdater from './filterUpdater'
import notisUpdater from './notisUpdater'

import apiFetcher from '../middlewares/apiFetcher'
import logger from '../middlewares/logger'

const rootStateUpdater = combineStateUpdater({
  todos: todosUpdater,
  filter: filterUpdater,
  notis: notisUpdater
})

const enhancer = applyMiddleware(apiFetcher, logger)
const store = createStore(rootStateUpdater, enhancer)

export default store
