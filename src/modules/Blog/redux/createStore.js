import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
  dummy: function (state = {}, action) {
    return state
  }
})

export default () => createStore(reducer)

