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

const apiFetcher = () => next => action => {
  const { api, ...rest } = action
  if (!api) {
    return next(action)
  }

  return fetch(api.url)
    .then(res => res.json())
    .then(data => {
      next({
        ...rest,
        data
      })
    })
    .catch(error => console.log(error))
}

const enhancer = applyMiddleware(apiFetcher, logger)
const store = createStore(rootStateUpdater, enhancer)

export default store
