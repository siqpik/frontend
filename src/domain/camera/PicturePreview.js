import {Button, View} from "react-native";
import React from "react";

export const PicturePreview = props => (
    <View>
        <Button title={'Discard'} onPress={props.showCameraAgain()}/>
        <Button title={'Post!'} onPress={props.savePic()}/>
    </View>
)
