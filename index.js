import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';

const AppContainer = () => 
  <Provider>
    <App />
  </Provider>

AppRegistry.registerComponent('TODOList', () => AppContainer);
