// each function name is a key in the state object
// this is where we TRANSFORM the state of MOVS

import createReducer from '~/services/createReducer'
import * as types from '~/actions/types'

// export const recievedMovs = createReducer({}, {})

// // HOW WE ARE TRANSFORMING ACTIVITY COUNT
// // "state" is what we put in the first arg of createReducer
// // new objects are being created... (immutableJS)
// // old objects are NOT being changed
// export const activityCount = createReducer(0, {
//   [types.ADD_MOV] (state, action) {
//     return state + 1
//   },
// })

const initialState = {
  error: '',
  isFetching: false,
  // current_user: {
  //   user_id: '',
  //   email: '',
  //   first: '',
  //   last: '',
  // },
}

export default function movs(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_MOVS :
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.FETCHING_MOVS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        // movs: action.
      }
    case types.FETCHING_MOVS_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case types.SET_MOVS :
      return {
        ...state,
        events: action.events,
      }
    default :
      return state
  }
}
