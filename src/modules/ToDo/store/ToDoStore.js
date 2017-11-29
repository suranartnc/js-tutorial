import { createStore, combineReducers as combineStateUpdater } from 'redux'

import todosUpdater from './todosUpdater'
import filterUpdater from './filterUpdater'
import notisUpdater from './notisUpdater'

const rootStateUpdater = combineStateUpdater({
  todos: todosUpdater,
  filter: filterUpdater,
  notis: notisUpdater
})

const store = createStore(rootStateUpdater)

export default store
