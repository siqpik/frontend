'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import App from "../App";

export class MyCamera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>oELO</Text>

            </View>
        );
    }

    takePicture = async function() {
        if (this.camera) {
            const options = {width: 50, quality: 0.5, base64: true };
            this.setState({
                loading: true
            });
            try {
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
            }catch (e) {
                console.log(e)
            }
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

AppRegistry.registerComponent('MyCamera', () => App);