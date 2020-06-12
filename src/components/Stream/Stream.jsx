import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomCam from '../bottomCam';
import TopCam from '../TopCam';
import {ActivityIndicator, Colors} from 'react-native-paper';
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
  const [localStream, setLocalStream] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const startStream = async () => {
    try {
      const data = await mediaDevices.enumerateDevices();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getMediaStuff = async () => {
    try {
      const data = await mediaDevices.getUserMedia({
        audio: true,
        video: {
          mandatory: {
            minWidth: 500, // Provide your own width, height and frame rate here
            minHeight: 300,
            minFrameRate: 30,
          },
          facingMode: 'user',
        },
      });
      setLocalStream(data);
      setLoading(false);
      console.log('testing data', data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    startStream();
    getMediaStuff();
    console.log(localStream);
  }, []);
  console.log(localStream ? localStream.toURL() : 'Sorry no url');
  return (
    <View testID="data-test-stream" style={styles.container}>
      {/* <View>{loading && <TopCam localStream={localStream.toURL()} />}</View> */}
      {loading ? (
        <ActivityIndicator style={styles.loading} animating={loading} />
      ) : (
        <View>
          <TopCam streamURL={localStream.toURL()} {...props} />
        </View>
      )}

      <View style={styles.bottomHalf}>{/* <BottomCam /> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  bottomHalf: {
    position: 'absolute',
    top: '50%',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
