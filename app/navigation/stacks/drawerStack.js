import React from 'react'
import { StackNavigator } from 'react-navigation'
import Drawer from '~/navigation/drawer'

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: Drawer }
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
  })
})

export default DrawerNavigation
