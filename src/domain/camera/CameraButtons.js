import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style/styles";
import React from "react";

export const CameraButtons = props => (
    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={props.toggleDeviceCamera()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Change Cam </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.takePicture(props.camera)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP! </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.toggleFlash()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Flash {props.flashMode === 'on' ? 'Off' : 'On'} </Text>
        </TouchableOpacity>
    </View>
)
