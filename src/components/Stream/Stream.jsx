import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomCam from '../bottomCam';
import TopCam from '../TopCam';

export default function Stream() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'tomato', height: '50%'}}>
        <TopCam />
      </View>
      <View style={styles.bottomHalf}>
        <BottomCam />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomHalf: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
