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
export function setMovs(events) {
  return {
    type: types.SET_MOVS,
    events,
  }
}


const query = `query {
                 me {
                   id
                   email
                   first
                   last
                 }
                 events {
                   aid
                   id
                   value
                   activity_id
                   activityTitle
                 }
               }`


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
        return fetchMovsQuery(getState().currentUser.authToken, query).then(({ data }) => {
          dispatch(fetchingMovsSuccess())
          dispatch(setMovs(data.events))
        }).catch((error) => {
          debugger
          dispatch(fetchingMovsFailure(error))
        })
      })
    } else {
      return fetchMovsQuery(authToken, query).then(({ data }) => {
        dispatch(fetchingMovsSuccess())
        dispatch(setMovs(data))
      }).catch((error) => {
        debugger
        dispatch(fetchingMovsFailure(error))
      })
    }
  }
}
