import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import User from '../model/User';
import {PicsContainer} from './PicsContainer';
import {ProfileHeader} from './ProfileHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getJson, post} from '../service/ApiService';
import {
  USER_NAME_SESSION_ATTRIBUTE_NAME
} from '../service/AuthenticationService';

export class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      userName: props.route.params ? props.route.params.userName : undefined
    }
  }

  componentDidMount() {
    if (this.state.userName) {
      this.getUser(this.state.userName)
    } else {
      AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
      .then(userName => {
        this.setState({userName})
        this.getUser(this.state.userName)
      })
    }
  }

  render() {
    return (
        <ScrollView keyboardShouldPersistTaps='always'>
          {this.state.user
              ? (
                  <View>
                    <ProfileHeader
                        name={this.state.user.name}
                        profilePicUrl={this.state.user.profilePicUrl}
                        admirersCount={this.state.user.admirersCount}
                        admiredCount={this.state.user.admiredCount}
                        user={this.state.user}
                        amIAdmirer={this.state.user.amIAdmirer}
                        isLoggedUser={this.state.user.isLoggedUser}
                        requestStatus={this.state.user.hasPendingRequest}
                        sendAdmireRequest={() => this.sendAdmireRequest(
                            this.state.user.name)}
                        navigation={this.props.navigation}
                    />
                    <PicsContainer
                        isActualUser={this.state.user.isLoggedUser}
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
    .then(json => {
      console.log(JSON.stringify(json))
      return new User(json)
    })
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
