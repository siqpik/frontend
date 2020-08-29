import {Button, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CountDown from 'react-native-countdown-component';
import {styles} from "./style/styles";

export const PicturePreview = props => (
    <View style={styles.preview}>
        <CountDown
            until={60 * 3}
            size={30}
            onFinish={ props.showCameraAgain()}
            size={25}
            timeToShow={['M', 'S']}
        />

        <View style={styles.previewButtonsContainer}>
            <TouchableOpacity style={styles.previewButtons} title={'Discard'} onPress={props.showCameraAgain()}>
                <Text style={styles.buttonText}>Discard</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.previewButtons} onPress={props.savePic()}>
                <Text style={styles.buttonText}>Post!</Text>
            </TouchableOpacity>
        </View>
    </View>
)