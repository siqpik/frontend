import React, {Component} from 'react';
import {AppRegistry, ScrollView, Text, View} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";
import {PicsContainer} from "./PicsContainer"
import {ProfileHeader} from "./ProfileHeader";

export class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
            .then(userName => this.getUser(userName))
    }

    render(){
        return (
            <ScrollView>
                {this.state.user
                    ? (
                        <View>
                            <ProfileHeader name={this.state.user.name}
                                           profilePicUrl={this.state.user.profilePicUrl}
                                           admirers={this.state.user.admirers}
                                           admiring={this.state.user.admiring}
                                           user={this.state.user}
                            />
                            <PicsContainer pics={this.state.user.pics}/>
                        </View>
                    )
                    : (<Text>Loading</Text>)
                }
            </ScrollView>
            )
    }

    getUser = userName => {
        axios.get('https://siqpik.herokuapp.com/api/profile/' + userName)
            .then(resp => resp.data)
            .then(json => {
                alert("EY" + JSON.stringify(json));
                return new User(json)
            })
            .then(user => this.setState({user}))
            .catch(error => alert(error))
    }
}

AppRegistry.registerComponent('Profile', () => App);
