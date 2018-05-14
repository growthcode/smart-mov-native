import React from 'react'
import { StackNavigator } from 'react-navigation'
// import Login from '~/containers/Login'
import Drawer from '~/navigation/stacks/drawerStack.js'
import LoginStack from '~/navigation/stacks/loginStack.js'
// import Home from '~/containers/Home'

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: Drawer },
}, {
  headerMode: 'none',
  title: 'Main',
  // initialRouteName: 'loginStack',
  initialRouteName: 'drawerStack',
})

export default PrimaryNav
