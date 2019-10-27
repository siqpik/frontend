import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SignupForm} from './SignupForm';
import {LoginButton} from "./LoginButton";


export default class SignupScreen extends Component {

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
            <View style={styles.container}>
                <SignupForm
                    type="Signup"
                    navigation={this.props.navigation}
                    signInClicked={this.signInClicked.bind(this)}
                    userName={this.state.userName}
                    pass={this.state.pass}
                    readUserName={this.readUserName.bind(this)}
                    readPass={this.readPass.bind(this)}
                />
                {this.state.hasLoginFailed && <Text style={{color: 'red'}}>Invalid Credentials</Text>}
                {this.state.showSuccessMessage && <Text>Login Sucessful</Text>}
                <LoginButton navigation={this.props.navigation}/>
            </View>
        );
    }

    readUserName = userName => this.setState({userName});

    readPass = pass => this.setState({pass});

    signInClicked = async () => {


        let userName = this.state.userName;
        let password = this.state.pass;


        try {
            let response = await fetch("https://siqpik.herokuapp.com/register", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userName: userName, password: password})
            });


            const data = await response.json();



            if (response.status === 409 || response.status === 403 || response.status === 401 || response.status === 500) {

                this.setState({ hasLoginFailed: true });
                this.setState({ showSuccessMessage: false });
                alert(data.error);
                alert(response);

                alert(userName);
                alert(password);
            }else if (response.status === 200) {

                this.props.navigation.navigate('Home');
                this.setState({ showSuccessMessage: true });
                alert("Signed up!");

            }else {
                console.log(data.error);
                console.log(response);
            }


        } catch(error) {
            alert(error);
        }
    };

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
});