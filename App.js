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
import {LoginScreen} from "./src/domain/login/Login"

const App = createStackNavigator(

    {
        Home: HomeScreen,
        TakeNewPic: TakeNewPic,
        Profile: Profile,
        Login: LoginScreen
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(App);