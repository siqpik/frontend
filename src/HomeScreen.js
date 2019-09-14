import React from 'react';
import {AppRegistry, Button, ScrollView} from "react-native";
import App from "../App";
import {SearchProfile} from "./domain/profile/search/SearchProfile";
import AsyncStorage from '@react-native-community/async-storage';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "./domain/service/AuthenticationService";

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to Siqpik',
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <SearchProfile navigate={navigate}/>
                <Button
                    title={'Take a new Pic'}
                    onPress={() => navigate('Alert')}
                />
                <Button
                    title={'Go to my Profile'}
                    onPress={() =>
                        AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                            .then(userName =>  navigate('Profile', {userName: userName}))
                    }
                />
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('HomeScreen', () => App);
