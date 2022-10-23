'use strict';
import React, {Component} from 'react';
import {CameraView} from "./CameraView";
import mime from "mime";
import {uploadMedia} from "../service/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  USER_NAME_SESSION_ATTRIBUTE_NAME
} from "../service/AuthenticationService";

export class TakeNewPic extends Component {

  constructor(props) {
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
            post={this.postMedia}
        />
    )
  }

  postMedia = imagePath => {
    uploadMedia(this.getFormData(imagePath)).then(response => {
      if (response.status !== 201) {
        throw new Error(response.status)
      }
      AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
      .then(() => console.log('Home'))
    }).catch(error => console.log("Something went wrong posting: " + error))
  }

  getFormData = mediaPath => {
    console.log('Form data, papi')
    const imageUri = "file:///" + mediaPath.split("file:/").join("");

    const fd = new FormData();

    fd.append('pic', {
      uri: imageUri,
      type: mime.getType(imageUri),
      name: imageUri.split("/").pop()
    });

    console.log('Muthaaaa')

    return fd;
  }
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



