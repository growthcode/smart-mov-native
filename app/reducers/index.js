import { combineReducers } from 'redux'
import * as movsReducer from '~/reducers/movs'
import * as authReducer from '~/reducers/authentication'

export default combineReducers(
  Object.assign(
    movsReducer,
    authReducer,
  )
);
