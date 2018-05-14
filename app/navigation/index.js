import React from 'react'
import { StackNavigator } from 'react-navigation'
import Drawer from '~/navigation/drawer'
import Home from '~/containers/Home'

const RootStackNavigator = StackNavigator({
  Drawer: { screen: Drawer },
  Home: { screen: Home },
}, {
  // headerMode: 'none',
  // initialRouteName: 'Drawer',
  // initialRouteName: 'Home',
})

export default RootStackNavigator
