import React from 'react';

import Slider from 'react-native-slider';
import {View, Text, StyleSheet, Button} from 'react-native';
import useStoreHooks from '../../store/storeHooks';
function SelectAge(props) {
  console.log(props);
  const selectorAge = useStoreHooks().selectorAge;
  const {set_age} = useStoreHooks();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Age</Text>
      <Slider
        value={selectorAge}
        style={styles.slider}
        minimumValue={18}
        maximumValue={65}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={val => set_age(Math.round(val))}
      />
      <Text style={styles.age}>{selectorAge}</Text>
      <Button
        title={'Continue'}
        style={styles.button}
        onPress={() => props.navigation.navigate('Stream')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: -100,
    justifyContent: 'center',
  },
  age: {
    padding: 20,
  },
  slider: {
    width: 200,
    height: 40,
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 30,
  },

  button: {
    padding: 20,
  },
  textInput: {
    padding: 20,
  },
});

export default SelectAge;
