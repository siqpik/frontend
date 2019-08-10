'use strict';
import React, {Component} from 'react';
import {CameraView} from "./CameraView";

export class TakeNewPic extends Component {

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
            <CameraView
                showImage={this.state.showImage}
                deviceCamera={this.state.deviceCamera}
                flashMode={this.state.flashMode}
                toggleDeviceCamera={this.toggleDeviceCamera.bind(this)}
                showCameraAgain={this.showCameraAgain.bind(this)}
                toggleFlash={this.toggleFlash.bind(this)}
                takePicture={this.takePicture.bind(this)}
                imageUri={this.state.imageUri}
                savePic={this.savePic.bind(this)}
            />
            );
    }

    toggleDeviceCamera = () => () => this.setState({
        deviceCamera: this.state.deviceCamera === 'back' ? 'front' : 'back'
    })

    toggleFlash = () => () => this.setState({
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

    showCameraAgain = () => () => this.setState({
        showImage: false,
    })

    savePic = () => () => this.postToServer()

    postToServer = () => fetch('https://siqpik.herokuapp.com/picture/1', {
        method: 'POST',
        body: this.getFormData(),
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        if (!response.ok){
            throw new Error(response.status)
        }
    }).catch(error => alert("Something went wrong :( : " + error))

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
                .catch(error => alert("An error has ocurred" + error))
        }
    };
}