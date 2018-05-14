import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

class AuthToken extends Component {
  fetchAuthTokenPressed () {
    console.log(this.props)
    this.props.fetchAuthToken()
  }

  fetchTestRoutePressed () {
    this.props.fetchTestRoute()
  }

  render () {
    return (
      <View style={ {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      } }>
        <Text>
          AuthToken
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

function mapStateToProps ({ getMovs, email, authToken }) {
  return {
    authToken,
    email,
    getMovs,
  }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/actions'

// For Actions...
// mapping dispatch into this Container's Props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthToken)
