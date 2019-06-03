import React, { Component } from 'react';
import { Font } from 'expo';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import AppNavigator from './navigation';

import { store, persistor } from './store';

import fontImports from './constants/fontImports';
import fontNames from './constants/fontNames';

class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      [fontNames.TTNorms.thin]: fontImports.TTNorms.thin,
      [fontNames.TTNorms.extraLight]: fontImports.TTNorms.extraLight,
      [fontNames.TTNorms.light]: fontImports.TTNorms.light,
      [fontNames.TTNorms.regular]: fontImports.TTNorms.regular,
      [fontNames.TTNorms.medium]: fontImports.TTNorms.medium,
      [fontNames.TTNorms.bold]: fontImports.TTNorms.bold,
      [fontNames.HKGrotesk.light]: fontImports.HKGrotesk.light,
      [fontNames.HKGrotesk.regular]: fontImports.HKGrotesk.regular,
      [fontNames.HKGrotesk.medium]: fontImports.HKGrotesk.medium,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    return fontLoaded ? (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    ) : null;
  }
}

export default App;
