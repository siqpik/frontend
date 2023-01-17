'use strict';
import React, {useState} from 'react';
import CameraView from "./CameraView";
import mime from "mime";
import {uploadMedia} from "../service/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  USER_NAME_SESSION_ATTRIBUTE_NAME
} from "../service/AuthenticationService";

function TakeNewPic ({navigation}) {
  

    return (
        <CameraView
        navigation={navigation}
        />
    )
}

export default TakeNewPic;



