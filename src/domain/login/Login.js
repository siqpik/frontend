import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {Logo} from './Logo';
import {Form} from './Form';


export class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Login" navigation={this.props.navigation}/>
                <View style={styles.signupTextCont}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigate('Signin')}>
                        <Text style={styles.signupText}> Signup</Text>
                    </TouchableOpacity>
                </View>
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
    signupText: {
        fontSize: 16,
        fontWeight: "500"
    }
})
