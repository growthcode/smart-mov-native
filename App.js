import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddle, combineReduceers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import createLogger from 'redux-logger'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
