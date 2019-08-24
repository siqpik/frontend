import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './style/styles';


export class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../Assets/images/logo.jpg')}
                />
                <Text style={styles.logoText}>Siqpik</Text>
            </View>
        )
    }
}