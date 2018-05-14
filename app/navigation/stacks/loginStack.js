import { StackNavigator } from 'react-navigation'
import Login from '~/containers/Login'

const LoginStack = StackNavigator({
  loginScreen: { screen: Login },
  // signupScreen: { screen: SignupScreen },
  // forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

export default LoginStack
