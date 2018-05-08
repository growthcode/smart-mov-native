import { combineReducers } from 'redux'
import * as movsReducer from '~/reducers/movs'

export default combineReducers(
  Object.assign(
    movsReducer,
  )
);
