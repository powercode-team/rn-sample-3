import { AppRegistry } from 'react-native';

import App from './App';

/* global document */
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
