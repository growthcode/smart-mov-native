import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

class HistoryScreen extends Component {
  fetchMovsPressed() {
    this.props.fetchMovs()
  }
  fetchAuthPressed() {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>
          History
        </Text>

        <View>
          <TouchableHighlight onPress={ () => this.fetchAuthPressed() } >
            <Text>
              Set Auth Token
            </Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight onPress={ () => this.fetchMovsPressed() } >
            <Text>
              Fetch Movs
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/actions'

function mapStateToProps (state, { getMovs, email, authToken }) {
  // debugger
  // return {
    // authToken,
  //   email,
  //   getMovs,
  // }
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
