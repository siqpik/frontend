import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class SignupForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign up here!</Text>

                <TextInput style={styles.inputBox}
                           placeholder='Email'
                           placeholderTextColor='#000' />
                <TextInput style={styles.inputBox}
                           placeholder='Username'
                           placeholderTextColor='#000' />
                <TextInput style={styles.inputBox}
                           placeholder='Password'
                           secureTextEntry={true}
                           placeholderTextColor='#000' />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> {this.props.type} </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    inputBox: {
        width: 250,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical: 6
    },
    button: {
        width: 200,
        backgroundColor: '#000',
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    }
});