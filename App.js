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

const App = createStackNavigator(
    {
        Home: HomeScreen,
        TakeNewPic: TakeNewPic,
        Profile: Profile,
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(App);