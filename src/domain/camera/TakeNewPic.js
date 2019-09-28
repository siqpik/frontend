'use strict';
import React, {Component} from 'react';
import {CameraView} from "./CameraView";
import axios from "axios";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";
import AsyncStorage from '@react-native-community/async-storage'

export class TakeNewPic extends Component {

    constructor(props){
        super(props)
        this.state = {
            showImage: false,
            imageUri: undefined,
            deviceCamera: 'back',
            flashMode: 'off',
        }

        this.toggleDeviceCamera.bind(this)
        this.showCameraAgain.bind(this)
        this.toggleFlash.bind(this)
        this.takePicture.bind(this)
        this.savePic.bind(this)
    }

    render() {
        return (
            <CameraView
                showImage={this.state.showImage}
                deviceCamera={this.state.deviceCamera}
                flashMode={this.state.flashMode}
                toggleDeviceCamera={this.toggleDeviceCamera}
                showCameraAgain={this.showCameraAgain}
                toggleFlash={this.toggleFlash}
                takePicture={this.takePicture}
                savePic={this.savePic}
                imageUri={this.state.imageUri}
            />
         );
    }

    toggleDeviceCamera = () => () => this.setState({
        deviceCamera: this.state.deviceCamera === 'back' ? 'front' : 'back'
    })

    toggleFlash = () => () => this.setState({
        flashMode: this.state.flashMode === 'on' ? 'off' : 'on'
    })

    showCameraAgain = () => () => this.setState({
        showImage: false,
    })

    takePicture = camera => {
        if (camera){
            const options = {
                quality: 0.5,
                base64: true,
                mirrorImage: this.state.deviceCamera === "front",
                forceUpOrientation: true,
                fixOrientation: true
            };
            camera.takePictureAsync(options)
                .then(photo => {
                    this.setState({
                        showImage: true,
                        imageUri: photo.uri
                    })
                })
                .catch(error => alert("An error has ocurred: " + error))
        }
    };

    savePic = () => () => {
        axios.post(
            'https://siqpik.herokuapp.com/api/picture',
            this.getFormData(),
            {headers: {
                    'Content-Type': 'multipart/form-data'
            }}
            ).then(response => {
            if (response.status !== 201) throw new Error(response.status)
            AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                .then(userName => this.props.navigation.navigate('MyProfile'))
        }).catch(error => alert("Something went wrong: " + error))
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
}
