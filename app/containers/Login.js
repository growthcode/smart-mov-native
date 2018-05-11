import React, { Component } from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'

class Login extends Component {


  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>
          Login
        </Text>

        <View>

        </View>
      </View>
    )
  }
}

function mapStateToProps( { authToken, email } ) {
  return {
    authToken,
    email,
  }
}

export default connect(mapStateToProps)(Login)
