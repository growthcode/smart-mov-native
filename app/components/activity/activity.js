import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'

const data = {
  "data": {
    "activity": {
      "id": "QWN0aXZpdHktMjY4ZDQ5OTZkZWQ2ZGM4OC04",
      "value": 17.69,
      "title": "Sometimes science is a lot more art, than science. A lot of people don't get that. (3)",
      "num_movs": 5,
      "value_saved": 41.97,
      "avg_value": 8.39,
      "events": [
        {
          "id": "RXZlbnQtMjY4ZDQ5OTZkZWQ2ZGM4OC0xMQ==",
          "happened_at": "4/29/18 at 1:30am PDT",
          "value": 6.77
        },
        {
          "id": "RXZlbnQtMjY4ZDQ5OTZkZWQ2ZGM4OC0xNA==",
          "happened_at": "4/27/18 at 9:34am PDT",
          "value": 14.28
        },
        {
          "id": "RXZlbnQtMjY4ZDQ5OTZkZWQ2ZGM4OC0xMw==",
          "happened_at": "4/26/18 at 9:59pm PDT",
          "value": 14.33
        },
        {
          "id": "RXZlbnQtMjY4ZDQ5OTZkZWQ2ZGM4OC0xNQ==",
          "happened_at": "4/24/18 at 7:59pm PDT",
          "value": 1.7
        },
        {
          "id": "RXZlbnQtMjY4ZDQ5OTZkZWQ2ZGM4OC0xMg==",
          "happened_at": "4/24/18 at 7:35pm PDT",
          "value": 4.89
        }
      ]
    }
  }
}

class activity extends Component {
  render () {
    return (
      <View>
        <Text>
          activity
        </Text>
      </View>
    )
  }
}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/redux/actions'

function mapStateToProps (state) {
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
export default connect(mapStateToProps, mapDispatchToProps)(activity)
