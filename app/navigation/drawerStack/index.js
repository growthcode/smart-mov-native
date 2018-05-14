import React from 'react'
import { StackNavigator } from 'react-navigation'
import Drawer from '~/navigation/drawerStack/drawer'

const DrawerStack = StackNavigator({
  DrawerStack: { screen: Drawer },
})

export default DrawerStack
