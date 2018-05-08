import { combineReducers } from 'redux'
import * movsReducer from '~/reducers/movs'

export default combineReducers(
  Object.assign(
    movsReducer,
  )
);
