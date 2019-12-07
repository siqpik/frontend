import {Button, View} from 'react-native';
import React from 'react';
import CountDown from 'react-native-countdown-component';
export const PicturePreview = props => (
    <View>
        <CountDown
            until={60 * 5}
            size={30}
            onFinish={ props.showCameraAgain()}
            size={20}
            timeToShow={['M', 'S']}
        />


        <Button title={'Discard'} onPress={props.showCameraAgain()}/>
        <Button title={'Post!'} onPress={props.savePic()}/>
    </View>
)