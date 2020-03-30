import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './style/styles';


export class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 130, height: 130 }}
                    source={require('../../../src/assets/images/round-logo.png')}
                />
                <Text style={styles.logoText}>Siqpik</Text>
            </View>
        )
    }
}
