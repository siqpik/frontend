'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Image, View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import App from "../App";

export class MyCamera extends Component {
    constructor(props){
        super(props)
        this.state = {
            showImage: false,
            imageUri: undefined
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SIqpIK</Text>
                {!this.state.showImage && <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
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
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                </RNCamera>}
                {this.state.showImage && <Image source={{uri: this.state.imageUri}}
                                                style={{width: 400, height: 400}} />}
                {this.state.showImage && <Button title={'Discard'} onPress={this.showCameraAgain}/>}
                {this.state.showImage && <Button title={'Select this Pic'} onPress={this.savePic}/>}

            </View>
        );
    }


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
        fetch('https://siqpik.herokuapp.com/image', {
            method: 'POST',
            body: this.getFormData(),
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (response.ok){
                return response.json()
            }
            alert(response)
            throw new Error(response.status)
        })
            .then(json => alert("All went well :D " + JSON.stringify(json)))
            .catch(error => alert("Something went wrong :( : " + error))
    }

    takePicture = camera => {
        if (camera){
            const options = { quality: 0.5, base64: true };
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