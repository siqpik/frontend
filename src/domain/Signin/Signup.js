import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignupForm} from './SignupForm';
import {LoginButton} from "./LoginButton";
import {genericPost} from "../service/ApiService";
import {authenticate} from "../service/AuthenticationService";
import {Logo} from "../login/Logo";


export default class SignupScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            pass: '',
            showSuccessMessage: false,
            formUnFilled: false,
            correctEmail: true,
            signUpButtonEnabled: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <SignupForm
                    type="Signup"
                    navigation={this.props.navigation}
                    signInClicked={this.signInClicked.bind(this)}
                    username={this.state.username}
                    pass={this.state.pass}
                    readEmail={this.readEmail.bind(this)}
                    readUserName={this.readUserName.bind(this)}
                    readPass={this.readPass.bind(this)}
                    signUpButtonEnabled={this.state.signUpButtonEnabled}
                />

                {this.state.formUnFilled && <Text style={{color: 'red'}}>Please fill the fields</Text>}
                {!this.state.correctEmail && <Text style={{color: 'red'}}>Email is not correct</Text>}

                <LoginButton navigation={this.props.navigation}/>
            </View>
        );
    }

    readEmail = email => this.setState({email});
    readUserName = username => this.setState({username});
    readPass = pass => this.setState({pass})

    isValidEmail = () => {
        let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        const correctEmail = reg.test(this.state.email)
        this.setState({ correctEmail })

        return correctEmail
    }

    signInClicked = async () => {
        this.setState({signUpButtonEnabled: false})
        if (!this.isValidEmail()) {
            this.setState({signUpButtonEnabled: true})
            return
        }

        if (!(this.state.email && this.state.username && this.state.pass)){
            this.setState({
                formUnFilled: true
            })
            this.setState({signUpButtonEnabled: true})
            return
        }

        this.setState({
            formUnFilled: false
        })

        this.signup()
            .then(() => authenticate(this.state.username, this.state.pass)
                .then(() => this.props.navigation.navigate('RootNavigation'))
                .catch(error => {
                    this.setState({signUpButtonEnabled: true})
                    alert("Error at login: " + error.message)
                })
            )
    };

    signup = () => genericPost('/register', {email: this.state.email, userName: this.state.username, password: this.state.pass})
        .catch(error => {
            this.setState({signUpButtonEnabled: true})
            if (error.message === '409'){
                alert("username or email already exist")
            }
        })
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
