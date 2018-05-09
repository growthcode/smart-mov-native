import * as types from '~/actions/types'
import Api from '~/lib/api'

export function fetchMovs() {
  return (dispatch, getState) => {
    // const params = [
    //   `email=admin@gmail.com`,
    //   `password=password`
    // ].join('&')
    // return Api.post(`/auth_user?${params}`).then( resp => {
    //   console.log(resp)
    // }).catch( (ex) => {
    //   console.warn(ex)
    // })
  }
}

export function addMov() {
  return {
    type: types.ADD_MOV,
  }
}
