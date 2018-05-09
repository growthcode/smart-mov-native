import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/actions'
import Home from '~/containers/Home'

class AppContainer extends Component {
  render () {
    return (
      <Home { ...this.props } />
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
    return {}
  },
  mapDispatchToProps
)(AppContainer)
