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
    console.log(this.props)
    this.props.fetchAuthToken()
  }

  fetchTestRoutePressed() {
    this.props.fetchTestRoute()
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
              Set Auth Token
            </Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight onPress={ () => this.fetchTestRoutePressed() } >
            <Text>
              Test Route
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

function mapStateToProps( state, { getMovs, email, authToken } ) {
  return {
    authToken,
    email,
    getMovs,
  }
}

export default connect(mapStateToProps)(Home)

