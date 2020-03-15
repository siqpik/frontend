'use strict';
import React from 'react';
import {Image, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from "./style/styles";
import {AUDIO_RECORDING_PERMISSIONS, CAMERA_PERMISSIONS} from "./constants/permissions";
import {CameraButtons} from "./CameraButtons";
import {PicturePreview} from "./PicturePreview";

export const CameraView = props => (
    <View style={styles.container}>
        {!props.showImage &&
        <RNCamera
            style={styles.preview}
            type={props.deviceCamera}
            flashMode={props.flashMode}
            androidCameraPermissionOptions={CAMERA_PERMISSIONS}
            androidRecordAudioPermissionOptions={AUDIO_RECORDING_PERMISSIONS}
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
        </RNCamera>}

        {props.showImage && <Image source={{uri: props.imageUri}} style={styles.takenPic} />}

        {props.showImage &&
        <PicturePreview
            imageUri={props.imageUri}
            showCameraAgain={() => props.showCameraAgain()}
            savePic={() => props.savePic()}
        />
        }

    </View>)
