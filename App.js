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

const Stack = createStackNavigator()

export default () => (<NavigationContainer>
  <Stack.Navigator>
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
        title: '',
      }}
    />
      <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
              title: '',
          }}
      />
    <Stack.Screen
      name="RootNavigation"
      component={RootNavigator}
      options={{
        title: '',
      }}
    />
      <Stack.Screen
          name="TakePic"
          component={TakeNewPic}
          options={{
              title: '',
          }}
      />
  </Stack.Navigator>
</NavigationContainer>)
