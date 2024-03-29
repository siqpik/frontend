import { StyleSheet } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/domain/login/Login';
import RootNavigator from './src/domain/navigation/RootNavigator';
import { LoadingApp } from './src/domain/navigation/LoadingApp';
import SignupScreen from './src/domain/Signin/Signup';
import { Picture } from "./src/domain/pictureview/Picture";
import { Profile } from "./src/domain/profile/Profile";
import Preview from "./src/domain/camera/PicturePreview";
import CommentsPage from './src/domain/home/components/Comments';
import TakeNewPic from "./src/domain/camera/TakeNewPic";

import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
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
            headerShown: false,
            title: 'Siqpik',
            headerLeft: () => ('')
          }}
        />
        <Stack.Screen
          name="TakePic"
          component={TakeNewPic}
          options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
        />
        <Stack.Screen
          name="Picture"
          component={Picture}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Preview"
          component={Preview}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="ProfileOther"
          component={Profile}
          options={{
            title: 'Siqpik',
            headerCenter: () => ('')
          }}
        />
        <Stack.Screen
          name="PostComments"
          component={CommentsPage}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
