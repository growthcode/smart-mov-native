import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/actions'

class AppContainer extends Component {
  addMov() {
    this.props.addMov();
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>
          I am AppContainer!
        </Text>
        <Text>
          Activity Count: { this.props.activityCount }
        </Text>
        <TouchableHighlight onPress={ () => { this.addMov() } }>
          <Text>
            Add Activity
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

// For Actions...
// mapping dispatch into this Container's Props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

// For State...
// mapping parts of the global state into this Container's props
// the state argument is the "global state"
// and we "return" the part of the state that we want to use in props
export default connect(
  (state) => {
    return {
      activityCount: state.activityCount,
      // activityCount: state.activityCount,
    }
  },
  mapDispatchToProps
)(AppContainer)
