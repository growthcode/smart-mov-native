import React from 'react'
import { StackNavigator } from 'react-navigation'
// import Login from '~/containers/Login'
import DrawerStack from '~/navigation/drawerStack'
import LoginStack from '~/navigation/loginStack'
// import Home from '~/containers/Home'

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  // initialRouteName: 'drawerStack',
})

export default PrimaryNav
