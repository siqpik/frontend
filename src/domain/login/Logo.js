import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoText: {
        flexDirection: "row",
        marginVertical: 15,
        fontSize: 50,
        color: '#757575',
    },

})