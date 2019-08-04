'use strict';
import React, {Component} from 'react';
import {AppRegistry, Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import App from "../../../App";

export class MyCamera extends Component {
    constructor(props){
        super(props)
        this.state = {
            showImage: false,
            imageUri: undefined,
            deviceCamera: 'back',
            flashMode: 'off',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.showImage && <RNCamera
                    style={styles.preview}
                    type={this.state.deviceCamera}
                    flashMode={this.state.flashMode}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel?',
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
                                <TouchableOpacity onPress={() => this.toggleDeviceCamera()} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> Change Cam </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.toggleFlash()} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> Change {this.state.flashMode === 'on' ? 'Off' : 'On'} </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>}
                {this.state.showImage && <Image source={{uri: this.state.imageUri}}
                                                style={styles.takenPic} />}
                {this.state.showImage && <Button title={'Discard'} onPress={this.showCameraAgain}/>}
                {this.state.showImage && <Button title={'Select this Pic'} onPress={this.savePic}/>}
            </View>
        );
    }

    toggleDeviceCamera = () => this.setState({
        deviceCamera: this.state.deviceCamera === 'back' ? 'front' : 'back'
    })

    toggleFlash = () => this.setState({
        flashMode: this.state.flashMode === 'on' ? 'off' : 'on'
    })

    getFormData = () => {
        const fd = new FormData();

        fd.append("file", {
            uri: this.state.imageUri,
            type: 'image/jpg',
            name: 'image.jpg',
        });

        return fd;
    }

    showCameraAgain = () => this.setState({
        showImage: false,
    })

    savePic = () => {
        this.postToServer()
    }

    postToServer = () => {
        fetch('https://siqpik.herokuapp.com/picture/21', {
            method: 'POST',
            body: this.getFormData(),
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (!response.ok){
                throw new Error(response.status)
            }
        })
            .catch(error => alert("Something went wrong :( : " + error))
    }

    takePicture = camera => {
        if (camera){
            const options = {
                quality: 0.5,
                base64: true,
                mirrorImage: this.state.deviceCamera === "front"
            };
            camera.takePictureAsync(options)
                .then(photo => {
                    this.setState({
                        showImage: true,
                        imageUri: photo.uri
                    })
                })
                .catch(error => alert("An error has ocurred" + error))
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    takenPic:{
        flex: 1,
        resizeMode: 'contain',
        transform: [{ rotate: '90deg' }]
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
