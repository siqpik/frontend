import {TouchableOpacity, View} from "react-native";
import {styles} from "./style/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import IonIcon from 'react-native-vector-icons/Ionicons';

export const CameraButtons = props => (
    <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => props.flipCamera()}
                          style={styles.capture}>
            <IonIcon
                name="camera-reverse"
                color="white"
                size={45}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.takePicture()}
                          style={styles.capture}>
            <Icon
                name="circle-thin"
                size={50}
                color="white"
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.capture}>
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
