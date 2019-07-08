'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import App from "../App";

export class MyCamera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>oELO</Text>
                {/* So here you were never calling the RN Camera element that you imported. This I took from react native camera github */}
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {

                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>
            </View>
        );
    }

    takePicture = async function () {
        if (this.camera) {
            console.log('this.camera :', this.camera);
            const options = { width: 50, quality: 0.5, base64: true };
            this.setState({
                loading: true
            });
            try {
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
            } catch (e) {
                console.log(e)
            }
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Not sure why you had a black clolumn here
        // flexDirection: 'column',
        // backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

        //set the size of the RNCamera Element
        height: 500
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

AppRegistry.registerComponent('MyCamera', () => App);