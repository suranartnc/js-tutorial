import {
  createStore,
  combineReducers as combineStateUpdater,
  applyMiddleware
} from 'redux'

import todosUpdater from './todosUpdater'
import filterUpdater from './filterUpdater'
import notisUpdater from './notisUpdater'

const rootStateUpdater = combineStateUpdater({
  todos: todosUpdater,
  filter: filterUpdater,
  notis: notisUpdater
})

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const enhancer = applyMiddleware(logger)
const store = createStore(rootStateUpdater, enhancer)

export default store
