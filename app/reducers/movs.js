// this is where we TRANSFORM the state of MOVS

import createReducer from '~/lib/createReducer'
import * as types from '~/actions/types'

export const searchMovs = createReducer({}, {

})

// HOW WE ARE TRANSFORMING ACTIVITY COUNT
// "state" is what we put in the first arg of createReducer
// new objects are being created... (immutableJS)
// old objects are NOT being changed
export const activityCount = createReducer(0, {
  [types.ADD_MOV](state, action) {
    return state + 1;
  }
});
