import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'
import { connect } from 'react-redux'

  // fetchMovsPressed() {
    // this.props.fetchMovs()
          // <TouchableHighlight onPress={ () => this.fetchMovsPressed() } >

class Home extends Component {
  fetchAuthTokenPressed() {
    this.props.fetchAuthToken()
  }

  render () {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          Home
        </Text>
        <View>
          <TouchableHighlight onPress={ () => this.fetchAuthTokenPressed() } >
            <Text>
              Fetch Movs
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    getMovs: state.recievedMovs
  }
}

export default connect(mapStateToProps)(Home)

