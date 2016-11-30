import {
  createStore,
  combineReducers
} from 'redux'

import {
  textFieldReducer
} from './reducers'

export default createStore(
  combineReducers({
    text: textFieldReducer
  })
)
