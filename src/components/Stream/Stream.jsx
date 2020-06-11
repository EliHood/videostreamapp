import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomCam from '../bottomCam';
import TopCam from '../TopCam';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
const configuration = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};
const pc = new RTCPeerConnection(configuration);

export default function Stream(props) {
  const [localStream, setLocalStream] = React.useState('');
  const [roomData, setRoomdata] = React.useState(null);
  const constraints = {
    audio: false,
    video: true,
  };

  return (
    <View testID="data-test-stream" style={styles.container}>
      <View>
        <TopCam />
      </View>
      <View style={styles.bottomHalf}>{/* <BottomCam /> */}</View>
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
