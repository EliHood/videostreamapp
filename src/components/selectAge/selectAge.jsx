import React from 'react';
import database from '@react-native-firebase/database';
import Slider from 'react-native-slider';
import {View, Text, StyleSheet, Button} from 'react-native';
import useStoreHooks from '../../store/storeHooks';
import OurButton from '../../common/button';
function SelectAge(props) {
  const selectorAge = useStoreHooks().selectorAge;
  const {set_age} = useStoreHooks();
  return (
    <View testID={'test-data-age'} style={styles.container}>
      <Text testID={'test-data-age-header'} style={styles.header}>
        Select Age
      </Text>
      <Slider
        testID="test-slider"
        value={selectorAge}
        style={styles.slider}
        minimumValue={18}
        maximumValue={65}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={val => set_age(Math.round(val))}
      />
      <Text style={styles.age}>{selectorAge}</Text>
      <OurButton
        testID="test-data-age-button"
        title={'Continue'}
        onPress={() => props.navigation.navigate('StartStream')}>
        Continue
      </OurButton>
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
