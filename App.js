/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";
import {Profile} from "./src/domain/profile/Profile";
import {LoginScreen} from "./src/domain/login/Login"
import SignupScreen from "./src/domain/Signin/Signup";
import {Picture} from "./src/domain/pictureview/Picture";
import RootNavigation from "./src/domain/navigation/RootNavigation";
import {TakeNewPic} from "./src/domain/camera/TakeNewPic";
import {LoadinApp} from "./src/LoadinApp";

const AppStack = createStackNavigator(
    {
        RootNavigation: RootNavigation,
        Profile: Profile,
        Signup: SignupScreen,
        Picture: Picture,
        Camera: TakeNewPic
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

const LoginStack = createStackNavigator({ Login: LoginScreen });

const NavStack = createSwitchNavigator(
    {
        Loading: LoadinApp,
        App: AppStack,
        Login: LoginStack,
    },
    {
        initialRoute: 'Loading',
    }
);

export default createAppContainer(NavStack)

//export default Root;
