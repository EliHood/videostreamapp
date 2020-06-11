import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import useStoreHooks from '../store/storeHooks';

function BottomCam(props) {
  console.log(props);
  return (
    <View testID={'data-test-bottomCam'} style={styles.camView}>
      <RTCView style={styles.rtcview} zOrder={1} streamURL={props.streamURL} />
    </View>
  );
}

const styles = StyleSheet.create({
  rtcview: {
    width: '100%',
    height: '80%',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  camView: {
    padding: 0,
    margin: 0,
  },
});

export default BottomCam;
