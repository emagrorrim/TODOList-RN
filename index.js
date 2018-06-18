import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/App';
import reducer from './src/reducers/todoReducer';

const store = createStore(reducer)

const AppContainer = () => 
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent('TODOList', () => AppContainer);
