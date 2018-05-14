import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class HistoryScreen extends Component {
  static navigationOptions = {
    title: 'History',
  };

  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          History
        </Text>
      </View>
    )
  }
}

