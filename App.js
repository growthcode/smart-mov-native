import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReduceers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '~/reducers'
import AppContainer from '~/containers/AppContainer'

const loggerMiddlerware = createLogger({ predicate: (getState, action) => __DEV__ });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddlerware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

// class SmartMov extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App
