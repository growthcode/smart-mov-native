// this is where we TRANSFORM the state of AUTH
// each function name is a key in the state object

import createReducer from '~/lib/createReducer'
import * as types from '~/actions/types'

export const authToken = createReducer({}, {
  [types.SET_AUTH_TOKEN](state, action) {
    return action.auth_token
  }
})

export const email = createReducer({}, {
  [types.SET_AUTH_TOKEN](state, action) {
    return action.user.email
  }
})

export const user_id = createReducer({}, {
  [types.SET_AUTH_TOKEN](state, action) {
    return action.user.id
  }
})