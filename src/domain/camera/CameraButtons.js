import {TouchableOpacity, View} from "react-native";
import {styles} from "./style/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import IonIcon from 'react-native-vector-icons/Ionicons';

export const CameraButtons = props => (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={props.toggleDeviceCamera()}
                        style={styles.capture}>
        <IonIcon
            name="md-reverse-camera"
            color="white"
            size={45}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.takePicture(props.camera)}
                        style={styles.capture}>
        <Icon
            name="circle-thin"
            size={50}
            color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.toggleFlash()} style={styles.capture}>

        {props.flashMode === 'on' ?
            <IonIcon
                name="md-flash"
                color="white"
                size={45}
            />
            :
            <IonIcon
                name="md-flash-off"
                color="white"
                size={45}
            />
        }

      </TouchableOpacity>

    </View>
);
