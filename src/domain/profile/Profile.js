import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, View} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";

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
        return (<ScrollView>
            {
                this.state.user &&
                this.state.user.pics
                    .map((pic, index) =>
                        <View key={index + 'view'}>
                            <Image
                                key={index}
                                style={{width: 400, height: 400}}
                                source={{uri: pic.url}}
                            />
                            <View key={index + 'space'} style={{height: 15, backgroundColor: 'white'}}/>
                        </View>
                )
            }
        </ScrollView>)
    }

    getUser = userName => {
        axios.get('https://siqpik.herokuapp.com/api/profile/' + userName)
            .then(resp => resp.data)
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .catch(error => alert(error))
    }
}

AppRegistry.registerComponent('Profile', () => App);
