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
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '~/components/Button'
import Label from '~/components/Label'
// import Label from '~/components/Label';

// <View style={{
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// }}>
// <Text>
// Login
// </Text>
// </View>

class Login extends Component {
  forgotLoginPressed () {
    console.log('props', this.props)
  }

  submitFormPressed () {
    console.log('props', this.props)
    this.props.fetchAuthToken()
  }

  cancelFormPressed () {
    console.log('props', this.props)
  }

  facebookLoginPressed () {
    console.log('props', this.props)
  }

  render () {
    const marginBottom = { marginBottom: 20 }

    return (
      <ScrollView style={ styles.scroll } >
        <View style={ styles.baseMarginBottom } >
          <Button label='Forgot Login/Pass'
            styles={ { button: styles.alignRight, label: styles.label } }
            onPress={ () => this.forgotLoginPressed() } />
        </View>
        <View style={ styles.baseMarginBottom } >
          <Label text='Username or Email' />
          <TextInput style={ styles.textInput } />
        </View>
        <View style={ styles.baseMarginBottom }>
          <Label text='Password' />
          <TextInput secureTextEntry={ true }
            style={ styles.textInput } />
        </View>
        <View style={ styles.baseMarginBottom } >
          <Button label='Sign In'
            styles={ { button: styles.primaryButton, label: styles.buttonWhiteText } }
            onPress={ () => this.submitFormPressed() } />
        </View>
        <View style={ styles.baseMarginBottom } >
          <Button label='CANCEL'
            styles={ { label: styles.buttonBlackText } }
            onPress={ () => this.cancelFormPressed() } />
        </View>
        <View style={ styles.footer }>
          <View style={ styles.baseMarginBottom } >
            <Button
              styles={ { button: styles.transparentButton } }
              onPress={ () => this.facebookLoginPressed() }>
              <View style={ styles.inline }>
                <Icon name='facebook-official' size={ 30 } color='#3B5699' />
                <Text style={ [styles.buttonBlueText, styles.buttonBigText] }>  Connect </Text>
                <Text style={ styles.buttonBlueText }>with Facebook</Text>
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  baseMarginBottom: { marginBottom: 20 },
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column',
  },
  label: {
    color: '#0d8898',
    fontSize: 20,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF',
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2,
  },
  buttonBlueText: {
    fontSize: 20,
    color: '#3B5699',
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inline: {
    flexDirection: 'row',
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856',
  },
  primaryButton: {
    backgroundColor: '#34A853',
  },
  footer: {
    marginTop: 100,
  },
})

function mapStateToProps ({ authToken, email }) {
  return {
    authToken,
    email,
  }
}

export default connect(mapStateToProps)(Login)
