/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Provider} from 'react-redux';
import Nav from './src/Nav';
import {store} from './src/store/store';
import storeHooks from './src/store/storeHooks';
function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 210,
  },
});

export default App;
