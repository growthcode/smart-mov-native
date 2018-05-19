import * as types from '~/actions/types'
import Api from '~/services/api'


// export const FETCHING_MOVS = 'FETCH_ALL_MOVS'
// export const FETCHING_MOVS_SUCCESS = 'FETCHING_MOVS_SUCCESS'
// export const FETCHING_MOVS_FAILURE = 'FETCHING_MOVS_FAILURE'
// export const SET_MOVS = 'SET_MOVS'

export function fetchingMovs() {
  return {
    type: types.FETCHING_MOVS,
  }
}
export function fetchingMovsSuccess() {
  return {
    type: types.FETCHING_MOVS_SUCCESS,
  }
}
export function fetchingMovsFailure() {
  return {
    type: types.FETCHING_MOVS_FAILURE,
  }
}
export function setMovs(activities) {
  return {
    type: types.SET_MOVS,
    activities,
  }
}


const query = `
  query {
    activities {
      id
      value
      title
      avg_value
      num_movs
      value_saved
    }
  }
`


function fetchMovsQuery(authToken, query = query) {
  const params = { query }
  const authHeader = { AUTHORIZATION: `Bearer ${authToken}` }
  return Api.post(`/graphql`, authHeader, params)
}

// temp adding auto fetch Auth
import { ActionCreators } from '~/actions'
import fetchAndHandleAuthedUser from '~/actions/currentUser'
export function fetchMovs() {
  return (dispatch, getState) => {
    dispatch(fetchingMovs())
    const authToken = getState().currentUser.authToken
    const movs = getState().currentUser.movs

    if (authToken == '' || !authToken) {
      return dispatch(ActionCreators.fetchAndHandleAuthedUser()).then(() => {
        // fetchMovsQuery(getState().currentUser.authToken, query).then((result) => {
        //   console.log(result)
        //   debugger
        // })
        return fetchMovsQuery(getState().currentUser.authToken, query).then((result) => {
          console.log('result', result)
          dispatch(fetchingMovsSuccess())
          dispatch(setMovs(result.data.activities))
        }).catch((error) => {
          debugger
          dispatch(fetchingMovsFailure(error))
        })
      })
    } else {
      return fetchMovsQuery(authToken, query).then((result) => {
        console.log(result)
        dispatch(fetchingMovsSuccess())
        dispatch(setMovs(result.data.activities))
      }).catch((error) => {
        debugger
        dispatch(fetchingMovsFailure(error))
      })
    }
  }
}
