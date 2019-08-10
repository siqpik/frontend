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

const App = createStackNavigator(
    {
        Home: HomeScreen,
        Alert: AlertBeforePic,
        Profile: Profile,
        TakeNewPic: TakeNewPic
    },
    {
        initialRouteName: 'Home',
    },
);

export default createAppContainer(App);
