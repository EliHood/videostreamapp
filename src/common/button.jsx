import React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
const OurButton = props => {
  return (
    <Button
      {...props}
      compact={true}
      dark={false}
      mode="outlined"
      style={styles.button}>
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
  },
});

export default OurButton;
