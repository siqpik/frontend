/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/domain/login/Login';
import RootNavigator from './src/domain/navigation/RootNavigator';
import {LoadingApp} from './src/domain/navigation/LoadingApp';
import SignupScreen from './src/domain/Signin/Signup';
import {TakeNewPic} from "./src/domain/camera/TakeNewPic";
import {Picture} from "./src/domain/pictureview/Picture";
import {Profile} from "./src/domain/profile/Profile";

import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderLogo from "./src/domain/shared/HeaderLogo";

Icon.loadFont();

const Stack = createStackNavigator()

export default () => (<NavigationContainer>
  <Stack.Navigator
      headerLayoutPreset={'center'}
  >
    <Stack.Screen
      name="Loading"
      component={LoadingApp}
      options={{
        title: '',
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
          headerTitle: 'Login',
          headerLeft: null
      }}
    />
      <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
              headerTitle: 'Signup',
          }}
      />
    <Stack.Screen
      name="RootNavigation"
      component={RootNavigator}
      options={{
        title: 'Siqpik',
          headerLeft: () => ('')
      }}
    />
      <Stack.Screen
          name="TakePic"
          component={TakeNewPic}
          options={{
              title: '',
          }}
      />
      <Stack.Screen
          name="Picture"
          component={Picture}
          options={{
              title: '',
          }}
      />
      <Stack.Screen
          name="ProfileOther"
          component={Profile}
          options={{
              headerTitle: () => (<HeaderLogo />),
          }}
      />
  </Stack.Navigator>
</NavigationContainer>)
