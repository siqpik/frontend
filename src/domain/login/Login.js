import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Logo} from './Logo';
import {Form} from './Form';
import {SignUpButton} from "./SignUpButton";
import base64 from 'react-native-base64'
import {executeBasicAuthenticationService} from "../service/AuthenticationService";


export class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            userName: '',
            pass: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    render() {
        return (
            <View style={styles1.container}>
                <Logo />
                <Form
                    type="Login"
                    navigation={this.props.navigation}
                    loginClicked={this.loginClicked.bind(this)}
                    userName={this.state.userName}
                    pass={this.state.pass}
                    readUserName={this.readUserName.bind(this)}
                    readPass={this.readPass.bind(this)}
                />
                {this.state.hasLoginFailed && <Text>Invalid Credentials</Text>}
                {this.state.showSuccessMessage && <Text>Login Sucessful</Text>}
                <SignUpButton navigation={this.props.navigation}/>
            </View>
        );
    }

    readUserName = userName => this.setState({userName})

    readPass = pass => this.setState({pass})

    loginClicked = () => () => {
        executeBasicAuthenticationService(this.state.userName, this.state.pass)
    }
}

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
