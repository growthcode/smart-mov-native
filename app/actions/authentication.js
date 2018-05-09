import * as types from '~/actions/types'
import Api from '~/lib/api'
import { AsyncStorage } from 'react-native'

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
        AsyncStorage.setItem('smartMovAuth', resp.auth_token).then(()=>{
          AsyncStorage.getItem('smartMovAuth', (err, auth_token)=>{
            debugger
          })
        })
      }
    }).catch( (ex) => {
      console.warn(ex)
    })
  }
}
