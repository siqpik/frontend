import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused} from "@react-navigation/native"
import {CameraButtons} from './CameraButtons';

const CameraView = props => {

    const [hasPermission, setHasPermission] = useState(false);
    const isFocused = useIsFocused()
    const devices = useCameraDevices()
    const camera = useRef(null)
    const takePhotoOptions = {
        qualityPrioritization: 'speed',
        flash: 'off'
    };

    const [device, setDevice] = useState(devices.back)


    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
        setDevice(devices.back)
    }, [devices]);

    const takePhoto = async () => {
        try {
            //Error Handle better
            if (camera.current == null) {
                throw new Error('Camera Ref is Null');
            }

            return camera.current.takePhoto(takePhotoOptions)
                .then(media => props.navigation.navigate('Preview', {state: {image: media}}))
        } catch (error) {
            console.log(error);
        }
    };

    const flipCamera = () => setDevice(device === devices.back ? devices.front : devices.back)

    const renderCamera = () => device == null
        ? (
            <View>
                <Text style={{color: '#fff'}}>Loading</Text>
            </View>
        )
        : (
            <View style={{flex: 1}}>
                {hasPermission && (
                    <>
                        <Camera
                            ref={camera}
                            style={StyleSheet.absoluteFill}
                            device={device}
                            isActive={isFocused}
                            photo={true}
                        />
                        <CameraButtons
                            takePicture={takePhoto}
                            flipCamera={flipCamera}
                        />
                    </>
                )}
            </View>
        )


    return (
        <View style={{flex: 1}}>
            {renderCamera()}
        </View>
    );
}

export default CameraView;
