import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import {Logo} from './Logo';
import {Form} from './Form';
import {SignUpButton} from './SignUpButton';
import {authenticate, USER_NAME_SESSION_ATTRIBUTE_NAME} from '../service/AuthenticationService';

export class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            pass: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            formUnFilled: false
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
                {this.state.hasLoginFailed && <Text style={{color: 'red'}}>Invalid Credentials</Text>}
                {this.state.formUnFilled && <Text style={{color: 'red'}}>Please fill the fields</Text>}
                {this.state.showSuccessMessage && <Text>Login Successful</Text>}
                <SignUpButton navigation={this.props.navigation}/>
            </View>
        );
    }

    readUserName = userName => this.setState({userName});

    readPass = pass => this.setState({pass});

    loginClicked = () => () => {
      if (!(this.state.userName || this.state.pass)){
        this.setState({
          formUnFilled: true
        })
      } else {
        authenticate(this.state.userName, this.state.pass)
          .then(() => {
            this.props.navigation.navigate('RootNavigation')
          })
          .catch(() => {
            this.setState({
              showSuccessMessage: false,
              formUnFilled: false,
              hasLoginFailed: true
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
