import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {PERMISSIONS, checkMultiple} from 'react-native-permissions';
import {NodeCameraView} from 'react-native-nodemediaclient';
import Video from 'react-native-video';
function TopCam() {
  const cameraRef = useRef(null);

  useEffect(() => {
    if (cameraRef) {
      const isRecording = async () => {
        checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.ANDROID.CAMERA])
          .then(statuses => console.log(statuses))
          .catch(err => console.log(err));
        const options = {
          quality: 0.5,
          videoBitrate: 8000000,
          maxDuration: 30,
        };
        await cameraRef.current.start();
      };
      isRecording();
    }
  }, []);

  takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const settings = {
    camera: {cameraId: 1, cameraFrontMirror: true},
    audio: {bitrate: 32000, profile: 1, samplerate: 44100},
    video: {
      preset: 24,
      bitrate: 400000,
      profile: 2,
      fps: 30,
      videoFrontMirror: true,
    },
  };
  return (
    <View testID={'data-test-topCam'} style={{flex: 1, position: 'relative'}}>
      <NodeCameraView
        ref={cameraRef}
        style={{
          bottom: 0,
          top: 0,
          left: 0,
          height: '100%',
          right: 0,
        }}
        outputUrl="rtmp://live.mux.com/app/75911dd0-d3fd-2392-7852-d9e34d66daef"
        camera={settings.camera}
        audio={settings.audio}
        scaleMode={'ScaleToFill'}
        video={settings.video}
        autopreview
      />
      <View style={{}}>
        <TouchableOpacity onPress={takePicture} style={{}}>
          {/* <Text
            style={{
              fontSize: 14,
              color: '#333',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 50,
            }}>
            {' '}
            SNAP{' '}
          </Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopCam;
