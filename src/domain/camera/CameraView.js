'use strict';
import React, {useRef} from 'react';
import {Image, View} from 'react-native';
import {styles} from "./style/styles";
import {CameraButtons} from "./CameraButtons";
import {PicturePreview} from "./PicturePreview";
import {Camera, useCameraDevices} from "react-native-vision-camera";
import {useIsFocused} from "@react-navigation/core";

const isFocused = useIsFocused()
const devices = useCameraDevices()
const device = devices.back
const camera = useRef(null)
const takePhotoOptions = {
    qualityPrioritization: 'speed',
    flash: 'off'
};

export const CameraView = props => (
    <View style={styles.container}>
        {!props.showImage &&
        <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isFocused}
            photo={true}
        >
            {({ camera }) => (
                <CameraButtons
                    camera={camera}
                    toggleDeviceCamera={props.toggleDeviceCamera}
                    takePicture={props.takePicture}
                    toggleFlash={props.toggleFlash}
                    flashMode={props.flashMode}
                />
                )}
        </Camera>}

        {props.showImage && <Image source={{uri: props.imageUri}} style={styles.takenPic} />}

        {props.showImage &&
        <PicturePreview
            imageUri={props.imageUri}
            showCameraAgain={() => props.showCameraAgain()}
            savePic={() => props.savePic()}
        />
        }

    </View>)
