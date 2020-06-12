import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import OurButton from '../common/button';
export default function StartStream(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.startStream}>Ready To Stream ?</Text>
      <OurButton
        title={'Continue'}
        onPress={() => props.navigation.navigate('Stream')}>
        Continue
      </OurButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
  },
  startStream: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 30,
  },
});
