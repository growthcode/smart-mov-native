// https://redux.js.org/basics/reducers#note-for-es6-savvy-users
// Because combineReducers expects an object, we can put all top-level reducers into a separate file, export each reducer function, and use import * as reducers to get them as an object with their names as the keys:
// import { combineReducers } from 'redux'
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)
// ==========================================================

import { combineReducers } from 'redux'
import * as authReducers from '~/reducers/authentication'
import movs from '~/reducers/movs'
import currentUser from '~/reducers/currentUser'

// combineReducers takes an object whose keys are the state's keys
// //=> Function reducers must return an object
// //=> const reducers - "attribute named constants"
// // //=> like those found in 'import * as authReducers from '~/reducers/authentication''
// // //=> these need to be put in an object
// // //=> which is why "Object.assign" was used in the tutorial
// // //=> Benefit here is you can create all the constants and
// // // //=> and simply organize them into how you want your state.
// // //=> Perhaps have a "State" object you build with constants
// // // //=> which you get from these attribute named constants

// Thought experiments... doesn't work this way:
//===== Example using Both V1 =====
// import * as authReducers from '~/reducers/authentication'
// export default combineReducers(
//   Object.assign(
//     authReducer, // list of const reducers in an obj "import * as authReducers"
//     {
//       currentUser, // Function reducer, returns object
//       movs, // Function reducer, returns object
//     }
//   )
// )
//===== Example using Both V2 =====
// import { authToken, email, userId } as authReducers from '~/reducers/authentication'
// export default combineReducers(
//   {
//     authToken, // const reducer
//     email, // const reducer
//     userId , // const reducer
//     currentUser, // Function reducer, returns object
//     movs, // Function reducer, returns object
//   }
// )
//===== Example using only functions returning objs =====
// export default combineReducers({
//   currentUser, // reducer function, returns object
//   movs, // reducer function, returns object
// })
//===== Example using only consts =====
// import * as authReducers from '~/reducers/authentication'
// export default combineReducers(
//   authReducer
// )
//===== Example using only consts V2 =====
// import * as authReducers from '~/reducers/authentication'
// export default combineReducers(
//   {
//     auth: {
//       userId: authReducers.userId,
//       token: authReducers.authToken,
//     },
//     email: authReducers.email,
//   }
// )
//===== Example using only consts V3 =====
// import { authToken, email, userId } from '~/reducers/authentication'
// export default combineReducers(
//   {
//     auth: {
//       userId,
//       token: authToken,
//     },
//     email,
//   }
// )


export default combineReducers({
  currentUser, // reducer function
  movs, // reducer function
})
