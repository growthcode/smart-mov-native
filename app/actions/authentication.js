import * as types from '~/actions/types'
import Api from '~/lib/api'

export function fetchAuthToken(email = 'admin@gmail.com', password = 'password') {
  return (dispatch, state) => {
    const params = [
      `email=${email}`,
      `password=${password}`
    ].join('&')
    return Api.post(`/auth_user?${params}`).then( resp => {
      if (!!resp.errors) {
        console.log(resp)
        console.warn(resp)
      } else {
        console.log('Success Fetch Auth', resp)
        dispatch(setAuthToken(resp))
      }
    }).catch( (ex) => {
      console.warn(ex)
    })
  }
}

export function setAuthToken( { auth_token, user } ) {
  return {
    type: types.SET_AUTH_TOKEN,
    auth_token,
    user,
  }
}
