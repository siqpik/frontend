import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export const SignupForm = props =>
    <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   placeholder='Email'
                   placeholderTextColor='#000'
                   onChangeText={email => props.readEmail(email)}
                   value={props.email}
        />

        <TextInput style={styles.inputBox}
                   placeholder='Username'
                   placeholderTextColor='#000'
                   onChangeText={userName => props.readUserName(userName)}
                   value={props.username}
        />
        <TextInput style={styles.inputBox}
                   placeholder='Display Name'
                   placeholderTextColor='#000'
                   onChangeText={displayName => props.readDisplayName(displayName)}
                   value={props.displayName}
        />
        <TextInput style={styles.inputBox}
                   placeholder='Password'
                   secureTextEntry={true}
                   placeholderTextColor='#000'
                   onChangeText={pass => props.readPass(pass)}
                   value={props.pass}
        />
        {
            props.signUpButtonEnabled &&
            <TouchableOpacity style={styles.button} onPress={() => props.signInClicked()}>
                <Text style={styles.buttonText}> {props.type} </Text>
            </TouchableOpacity>
        }
    </View>


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
