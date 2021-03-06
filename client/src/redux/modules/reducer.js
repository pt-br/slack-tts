import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import questions from './questions'
import channels from './channels'

export default combineReducers({
  routing: routerReducer,
  questions,
  channels
})
