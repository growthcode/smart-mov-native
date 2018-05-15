import * as types from '~/actions/types'

const initialState = {
  authToken: '',
  error: '',
  isAuthed: false,
  isFetching: false,
  authTokenExpiresAt: '',
  current_user: {
    user_id: '',
    email: '',
    first: '',
    last: '',
  },
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_AUTH :
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCHING_CURRENT_USER_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    case types.FETCHING_CURRENT_USER_FAILURE :
      return {
        ...state,
        isFetching: true,
        error: action.error,
      }
    case types.SET_AUTH :
      return {
        ...state,
        authToken: action.authToken,
        isAuthed: true,
        isFetching: false,
        authTokenExpiresAt: action.authTokenExpiresAt,
        current_user: {
          user_id: action.user_id,
          first: (action.first || 'first__test'),
          last: (action.last || 'last__test'),
        }
      }
    case types.REMOVE_AUTH :
      return {
        ...state,
        isAuthed: false,
        authToken: '',
        isFetching: false,
        authTokenExpiresAt: '',
        current_user: {},
      }
    default :
      return state
  }
}
