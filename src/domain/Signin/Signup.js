import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import SignupForm from './SignupForm';
import {LoginButton} from "./LoginButton";

export default class SignupScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SignupForm type="Signup" />
                <LoginButton navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 16,
        justifyContent: 'center',
    },
    signinText: {
        fontSize: 16,
        fontWeight: "500"
    }
})