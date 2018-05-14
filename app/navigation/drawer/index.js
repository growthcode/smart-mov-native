import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import NavBarItem from '~/components/navBarItem'

import RecordMovScreen from '~/navigation/drawer/screens/RecordMovScreen'
import HistoryScreen from '~/navigation/drawer/screens/HistoryScreen'
import SummaryScreen from '~/navigation/drawer/screens/SummaryScreen'
import AccountScreen from '~/navigation/drawer/screens/AccountScreen'

const Drawer = DrawerNavigator({
  RecordMovScreen: { screen: RecordMovScreen },
  HistoryScreen: { screen: HistoryScreen },
  SummaryScreen: { screen: SummaryScreen },
  AccountScreen: { screen: AccountScreen },
}, {
  navigationOptions: ({ navigation }) => {
    const { state, navigate } = navigation
    const primaryColor = '#3498db'
    const secondaryColor = 'white'
    return ({
      title: state.routeName,
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerTitleStyle: {
        color: secondaryColor,
      },
      headerTintColor: {
        tintColor: secondaryColor,
      },
      headerLeft: (
        <NavBarItem
          iconName='bars'
          onPress={ () => { navigate('DrawerToggle') } }/>
      ),
    })
  },
})

export default Drawer



