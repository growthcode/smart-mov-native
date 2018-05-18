import colors from '~/config/colors';

import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  ListItem,
  Avatar,
} from 'react-native-elements';

const log = () => console.log('this is an example method');


class HistoryScreen extends Component {
  fetchMovsPressed() {
    this.props.fetchMovs()
  }
  fetchAuthPressed() {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    console.log('history', this.props.currentUser.movs)
    const currentUser = this.props.currentUser
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        {(this.props.currentUser.authToken.length === 0) ? (
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
                  </View>) : ''
        }
        <View style={styles.list}>
          {this.props.currentUser.movs.events.map((l, i) => (
            <ListItem
              asdf={()=>{ console.log('loop', i, l) }}
              key={l.id}
              onPress={ log }
              title={l.activityTitle}
              subtitle={currentUser.email}
              chevron
              bottomDivider
              textInputMultiline={true}
              titleNumberOfLines={3}
            />
          ))}
        </View>
      </ScrollView>
    )
  }
}
              // {/*leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}*/}

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '~/actions'

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
