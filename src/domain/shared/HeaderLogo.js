import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './../login/style/styles';

export default () => (
    <View style={styles.container}>
        <Image
            style={{ width: 60, height: 56, backgroundColor: 'rgba(255,255,255, 0.9)'}}
            source={require('../../../src/assets/images/round-logo.png')}
        />
    </View>
)
