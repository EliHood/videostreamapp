import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import useStoreHooks from '../store/storeHooks';

function TopCam(props) {
  console.log(props);
  const selectorAge = useStoreHooks().selectorAge;
  const selectorGender = useStoreHooks().selectorGender;
  return (
    <View testID={'data-test-topCam'} style={styles.camView}>
      <Text style={styles.topText}>Age: {selectorAge}</Text>
      <Text style={styles.bottomText}>Gender: {selectorGender}</Text>
      <RTCView
        objectFit={'cover'}
        style={styles.rtcview}
        streamURL={props.streamURL}
      />
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
    padding: 0,
  },
  topText: {
    position: 'absolute',
    zIndex: 999,
    color: '#fff',
    padding: 20,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 30,
  },
  bottomText: {
    position: 'absolute',
    color: '#fff',
    zIndex: 99999,
    padding: 20,
    marginTop: 40,
    fontSize: 12,
    fontWeight: '800',
  },
  camView: {
    padding: 0,
    margin: 0,
    width: '100%',
  },
});

export default TopCam;
