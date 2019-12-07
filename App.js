/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Profile} from "./src/domain/profile/Profile";
import {LoginScreen} from "./src/domain/login/Login"
import SignupScreen from "./src/domain/Signin/Signup";
import {Picture} from "./src/domain/pictureview/Picture";
import RootNavigation from "./src/domain/navigation/RootNavigation";
import {TakeNewPic} from "./src/domain/camera/TakeNewPic";
import AsyncStorage from '@react-native-community/async-storage'
import {TOKEN_SESSION} from "./src/domain/service/AuthenticationService";

let rootNav = 'Login'

AsyncStorage.getItem(TOKEN_SESSION)
    .then( token => {
        if (token){
            rootNav = 'RootNavigation'
        }
    })

const App = createStackNavigator(
    {
        RootNavigation: RootNavigation,
        Profile: Profile,
        Login: LoginScreen,
        Signup: SignupScreen,
        Picture: Picture,
        Camera: TakeNewPic
    },
    {
        initialRouteName:rootNav,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }

    }
);

export default createAppContainer(App);
