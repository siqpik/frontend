import React, {Component} from 'react';
import {AppRegistry, ScrollView, Text, View} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import {PicsContainer} from "./PicsContainer"
import {ProfileHeader} from "./ProfileHeader";
import AsyncStorage from "@react-native-community/async-storage";
import {getJson, post, USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";

export class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: undefined,
            userName: props.navigation.state.params ? props.navigation.state.params.userName : undefined
        }
    }

    componentDidMount() {
        if(this.state.userName){
            this.getUser(this.state.userName)
        } else {
            AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                .then(userName =>  {
                    this.setState({userName})
                    this.getUser(this.state.userName)
                })
        }
    }

    render(){
        return (
            <ScrollView>
                {this.state.user
                    ? (
                        <View>
                            <ProfileHeader
                                name={this.state.user.name}
                                profilePicUrl={this.state.user.profilePicUrl}
                                admirers={this.state.user.admirers}
                                admiring={this.state.user.admiring}
                                user={this.state.user}
                                isAdmiring={this.state.user.isAdmiring}
                                isActualUser={this.state.user.isActualUser}
                                requestStatus={this.state.user.requestStatus}
                                sendAdmireRequest={() => this.sendAdmireRequest(this.state.user.name)}
                            />
                            <PicsContainer
                                pics={this.state.user.pics}
                                navigate={this.props.navigation.navigate}
                                username={this.state.user.name}
                            />
                        </View>
                    )
                    : (<Text>Loading...</Text>)
                }
            </ScrollView>
            )
    }

    getUser = userName => {
        getJson('/profile/' + userName)
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .catch(error => alert(error))
    };
    sendAdmireRequest = userName => {
        post('/request/' + userName)
            .then(resp => {
                if (resp.status === 201) {
                    this.setState(prevState => (
                        {
                            user: {
                                ...prevState.user,
                                requestStatus: 'Pending'
                            },
                            userName: prevState.userName
                        }
                        )
                    );
                }
            }).catch(error => alert(error))
    };
}

AppRegistry.registerComponent('Profile', () => App);
