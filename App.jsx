/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Nav from './src/Nav';
import {store} from './src/store/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Nav />
      </Provider>
    </PaperProvider>
  );
}

export default App;
