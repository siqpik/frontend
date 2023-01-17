import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import User from '../model/User';
import {PicsContainer} from './PicsContainer';
import {ProfileHeader} from './ProfileHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getJson, post} from '../service/ApiService';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from '../service/AuthenticationService';

export class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: undefined,
            userName: props.route.params ? props.route.params.userName : undefined,
            posts: [],
            postsPage: 1
        }
    }

    componentDidMount() {
        if (this.state.userName) {
            this.getUser(this.state.userName)
            this.getProfilePosts(this.state.userName)
        } else {
            AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                .then(userName => {
                    this.setState({userName})
                    this.getUser(this.state.userName)
                    this.getProfilePosts(this.state.userName)
                })
        }
    }

    getUser = userName =>
        getJson('/profile/' + userName)// change to /user/username/profile
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .catch(error => alert(error))

    getProfilePosts = userName => getJson(`/post/${userName}/${this.state.postsPage}`)
        .then(json => this.setState(prevState => (
            {
                ...prevState,
                posts: json.postUrls
            }
        )))
        .then(json => console.log(this.state.user))

    render() {
        return (
            this.state.user
                ? (
                    <FlatList
                        ListHeaderComponent={<ProfileHeader
                            name={this.state.user.name}
                            profilePicUrl={this.state.user.profilePicUrl}
                            admirersCount={this.state.user.admirersCount}
                            admiredCount={this.state.user.admiredCount}
                            username={this.state.userName}
                            amIAdmirer={this.state.user.amIAdmirer}
                            isLoggedUser={this.state.user.isLoggedUser}
                            hasPendingRequest={this.state.user.hasPendingRequest}
                            sendAdmireRequest={() => this.sendAdmireRequest(
                                this.state.user.userName)}
                            navigation={this.props.navigation}
                        />}
                        ListFooterComponent={
                            (this.state.user.amIAdmirer || this.state.user.isLoggedUser) &&
                            <PicsContainer
                                isActualUser={this.state.user.isLoggedUser}
                                posts={this.state.posts}
                                navigate={this.props.navigation.navigate}
                                username={this.state.user.name}
                            />

                        }
                    />
                )
                : (<Text>Loading...</Text>)
        )
    }

    sendAdmireRequest = userName => post('/admire-request/' + userName)
        .then(resp => {
            if (resp.status === 201) {
                this.setState(prevState => (
                        {
                            user: {
                                ...prevState.user,
                                hasPendingRequest: true
                            },
                            userName: prevState.userName
                        }
                    )
                );
            }
        }).catch(error => alert(error))
}
