import React, {Component} from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';

import {Logo} from './Logo';
import {Form} from './Form';
import {SignUpButton} from './SignUpButton';
import {authenticate} from '../service/AuthenticationService';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

export class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pass: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            formUnFilled: false,
            loginButtonDisabled: false
        }

        this.backAction = this.backAction.bind(this)
    }

    backAction = () => BackHandler.exitApp()

    componentDidMount(): void {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    componentWillUnmount(): void {
        return () => BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    render() {
        return (

                <KeyboardAvoidingScrollView flex={0} containerStyle={styles1.container}>
                <Logo/>
                <Form
                    type="Login"
                    navigation={this.props.navigation}
                    loginClicked={this.loginClicked.bind(this)}
                    userName={this.state.userName}
                    pass={this.state.pass}
                    readUserName={this.readUserName.bind(this)}
                    readPass={this.readPass.bind(this)}
                    loginButtonDisabled={this.state.loginButtonDisabled}
                />
                {this.state.hasLoginFailed && <Text style={{color: 'red'}}>Invalid Credentials</Text>}
                {this.state.formUnFilled && <Text style={{color: 'red'}}>Please fill the fields</Text>}
                {this.state.showSuccessMessage && <Text>Login Successful</Text>}
                <SignUpButton navigation={this.props.navigation}/>
                </KeyboardAvoidingScrollView>

        );
    }

    readUserName = userName => this.setState({userName});

    readPass = pass => this.setState({pass});

    loginClicked = () => () => {
        if (!(this.state.userName || this.state.pass)) {
            this.setState({
                formUnFilled: true
            })
        } else {
            this.setState({
                loginButtonDisabled: true,
                hasLoginFailed: false
            })
            authenticate(this.state.userName, this.state.pass)
                .then(() => this.props.navigation.navigate('RootNavigation', {loggedUsername: this.state.userName}))
                .catch(() => {
                    this.setState({
                        showSuccessMessage: false,
                        formUnFilled: false,
                        hasLoginFailed: true,
                        loginButtonDisabled: false
                    });
                })
        }
    }
}

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
