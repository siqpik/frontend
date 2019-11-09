import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style/styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import React from "react";

export const CameraButtons = props => (
    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={props.toggleDeviceCamera()} style={styles.capture}>
            <Icon
                name="flash"
                color="white"
                size={30}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.takePicture(props.camera)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP! </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.toggleFlash()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Flash {props.flashMode === 'on' ? 'Off' : 'On'} </Text>
        </TouchableOpacity>

    </View>
);
