/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {HomeScreen} from "./src/HomeScreen";
import {TakeNewPic} from "./src/domain/camera/TakeNewPic";
import {Profile} from "./src/domain/profile/Profile";
import {AlertBeforePic} from "./src/domain/camera/AlertBeforePic"
import {LoginScreen} from "./src/domain/login/Login"
import {SearchProfile} from "./src/domain/profile/search/SearchProfile";


const App = createStackNavigator(

    {
        Home: HomeScreen,
        Alert: AlertBeforePic,
        Profile: Profile,
        Login: LoginScreen,
        TakeNewPic: TakeNewPic,
        SearchProfile: SearchProfile
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(App);
