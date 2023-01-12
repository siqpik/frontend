import {ImageBackground , Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useMemo, useState } from 'react';
import CountDown from 'react-native-countdown-component';
import { styles } from "./style/styles";

// Post Media
import AsyncStorage from "@react-native-async-storage/async-storage";
import { uploadMedia } from "../service/ApiService";
import mime from "mime";



function Preview(props) {
    const [imageUri, setImageUri] = useState("file:///" + props.route.params.state.image.path.split("file:/").join(""));
    
  function postMedia(imagePath) {
    uploadMedia(getFormData(imagePath)).then(response => {
      if (response.status !== 201) {
        throw new Error(response.status)
      }
      AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
      .then(() => console.log('Home'))
    }).catch(error => console.log("Something went wrong posting: " + error))
  }

  function getFormData () {

    const fd = new FormData();

    fd.append('pic', {
      uri: imageUri,
      type: mime.getType(imageUri),
      name: imageUri.split("/").pop()
    });



    return fd;
  }


    return (
        <View style={styles.preview}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: `file://${props.route.params.state.image.path}` }} style={styles.takenPic} >
                <View style={styles.countdown}>
                    <CountDown
                        until={60 * 3}
                        size={40}
                        onFinish={console.log("FINISHED")}
                        digitStyle={{ borderWidth: 0, borderColor: '#000',  }}
                        digitTxtStyle={{color: '#fff'}}
                        separatorStyle={{color: '#fff'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                    <View style={styles.previewButtonsContainer}>
                        <TouchableOpacity style={styles.previewButtons} onPress={() =>{
                            postMedia(imageUri)
                        }} >
                            <Text style={styles.buttonText}>Post!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.previewButtons} title={'Discard'} >
                            <Text style={styles.buttonText}>Discard</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Preview;