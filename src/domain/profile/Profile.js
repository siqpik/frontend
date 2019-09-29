import React, {Component} from 'react';
import {AppRegistry, ScrollView, Text, View} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import axios from 'axios'
import {PicsContainer} from "./PicsContainer"
import {ProfileHeader} from "./ProfileHeader";

export class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: undefined,
            userName: props.navigation.state.params.userName
        }
    }

    componentDidMount() {
        this.getUser(this.state.userName)
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
                                sendRequest={() => this.sendAdmireRequest(this.state.user.name)}
                            />
                            <PicsContainer
                                pics={this.state.user.pics}
                                navigate={this.props.navigation.navigate}
                                username={this.state.user.name}
                            />
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
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .catch(error => alert(error))
    };
    sendAdmireRequest = userName => {
        axios.post('https://siqpik.herokuapp.com/api/request/' + userName)
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
