import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// API FUNCTIONS

// ASYNC

// react-native-vision-camera
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused} from "@react-navigation/native"

// Camera buttons
import {CameraButtons} from './CameraButtons';

export const CameraView = props => {

  const [hasPermission, setHasPermission] = useState(false);

  const isFocused = useIsFocused()
  const devices = useCameraDevices()
  const device = devices.back
  const camera = useRef(null)
  const takePhotoOptions = {
    qualityPrioritization: 'speed',
    flash: 'off'
  };

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const takePhoto = async () => {
    try {
      //Error Handle better
      if (camera.current == null) {
        throw new Error('Camera Ref is Null');
      }

      return camera.current.takePhoto(takePhotoOptions)
      .then(pic => props.post(pic.path))
    } catch (error) {
      console.log(error);
    }
  };

  // addAttempt = async () => {
  //   try {
  //     const response = await post('/attempts', null, 'application/json');
  //     return response.status === 200;
  //   } catch (error) {
  //     alert("An error has ocurred: " + error)
  //   }
  // }

  function renderCamera() {
    if (device == null) {
      return (
          <View>
            <Text style={{color: '#fff'}}>Loading</Text>
          </View>
      )
    } else {
      return (
          <View style={{flex: 1}}>
            {device != null &&
                hasPermission && (
                    <>
                      <Camera
                          ref={camera}
                          style={StyleSheet.absoluteFill}
                          device={device}
                          isActive={isFocused}
                          photo={true}
                      />
                      <CameraButtons takePicture={takePhoto}/>
                    </>
                )}
          </View>
      )
    }

  }

  return (
      <View style={{flex: 1}}>
        {renderCamera()}
      </View>
  );
}
