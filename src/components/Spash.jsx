/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import SelectGender from './selectGender/selectGender';
import useStoreHooks from '../store/storeHooks';
function Splash(props) {
  return (
    <View style={styles.container}>
      <SelectGender {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    padding: 20,
  },
  button: {
    padding: 210,
  },
  textInput: {
    padding: 20,
  },
});

export default Splash;
