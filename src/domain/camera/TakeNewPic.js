'use strict';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CameraView from "./CameraView";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {post} from "../service/ApiService";

const TakeNewPic = () => {

   
        return (
            <CameraView/> 
        )
    }

    export default TakeNewPic;

    // toggleDeviceCamera = () => () => this.setState({
    //     deviceCamera: this.state.deviceCamera === 'back' ? 'front' : 'back'
    // })

    // toggleFlash = () => () => this.setState({
    //     flashMode: this.state.flashMode === 'on' ? 'off' : 'on'
    // })

    // showCameraAgain = () => () => this.setState({
    //     showImage: false,
    // })

    // addAttempt = async () => {
    //     try {
    //         const response = await post('/attempts', null, 'application/json');
    //         return response.status === 200;
    //     } catch (error) {
    //         alert("An error has ocurred: " + error)
    //     }
    // }

    // takePicture = camera => {
    //     this.addAttempt()
    //         .then(result => {
    //             if (result && camera) {
    //                 const options = {
    //                     quality: 0.5,
    //                     base64: true,
    //                     mirrorImage: this.state.deviceCamera === "front",
    //                     forceUpOrientation: true,
    //                     fixOrientation: true
    //                 };
    //                 camera.takePictureAsync(options)
    //                     .then(photo => {
    //                         this.setState({
    //                             showImage: true,
    //                             imageUri: photo.uri
    //                         })
    //                     })
    //                     .catch(error => console.log("An error has occurred: " + error))
    //             }
    //         })
    //         .catch(error => console.log("An error has occurred: " + error))
    // };

    

