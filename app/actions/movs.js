import * as types from '~/actions/types'
import Api from '~/services/api'


// export const FETCHING_MOVS = 'FETCH_ALL_MOVS'
// export const FETCHING_MOVS_SUCCESS = 'FETCHING_MOVS_SUCCESS'
// export const FETCHING_MOVS_FAILURE = 'FETCHING_MOVS_FAILURE'
// export const SET_MOVS = 'SET_MOVS'

export function fetchMovs () {
  return {
    type: types.FETCHING_MOVS,
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

function authHeader(authToken) {
  return
}


function fetchMovsQuery(authToken, query = query) {
  // const params = [
  //   `authToken=${authToken}`,
  //   `query=${...query}`,
  // ].join('&')
  const params = { query }
  const authHeader = { AUTHORIZATION: `Bearer ${authToken}` }
  debugger
  return Api.post(`/api/v1/graphql`, authHeader, params)
}


// export function addMov () {
//   return {
//     type: types.ADD_MOV,
//   }
// }

export function fetchingMovs() {
  return (dispatch, getState) => {
    debugger
    return fetchMovsQuery().then(resp => {
      debugger
    })
  }
}

