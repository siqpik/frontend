import React, { useEffect, useRef, useState } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// API FUNCTIONS
import { post } from '../service/ApiService'

// ASYNC 
import AsyncStorage from '@react-native-async-storage/async-storage';

// react-native-vision-camera
import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from "@react-navigation/native"

// Camera buttons
import { CameraButtons } from './CameraButtons';

const CameraView = ({ navigation, props }) => {


  const [hasPermission, setHasPermission] = useState(false);

  const [imagePath, setImagePath] = useState();
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
      if (camera.current == null) throw new Error('Camera Ref is Null');
      console.log('Photo taking ....');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      setImagePath(photo.path)
     
      savePic()
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

  const savePic = () => {
    console.log('posting Image!')
    console.log(imagePath)

    const fd = {
        "file": imagePath
      }
  
      // const fdNew = new FormData();
      // fdNew.append("file", fd);
  
      console.log(fd)
      console.log(imagePath)
      
      post(
        '/post',
        fd,
      )
      .then(response => {
        if (response.status !== 201) throw new Error(response.status)
        AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
          .then(() => navigation.navigate('Home'))
      }).catch(error => console.log("Something went wrong: " + error))
  }


  function renderCamera() {
    if (device == null) {
      return (
        <View>
          <Text style={{ color: '#fff' }}>Loading</Text>
        </View>
      )
    }
    else {
      return (
        <View style={{ flex: 1 }}>
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
                <CameraButtons takePicture={takePhoto} />
              </>
            )}
        </View>
      )
    }


  }
  return (
    <View style={{ flex: 1 }}>
      {renderCamera()}
    </View>
  );
}

export default CameraView; 