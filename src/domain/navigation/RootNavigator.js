import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import {SearchProfile} from '../profile/search/SearchProfile';
import {AlertBeforePic} from '../camera/AlertBeforePic';
import {NotificationsScreen} from '../notifications/NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const getOptions = name => ({
    tabBarLabel: name,
    tabBarIcon: ({tintColor}) => (
      <Text style={{color: tintColor}}/>
    ),
  })

const Tab = createBottomTabNavigator();

export default () => (<Tab.Navigator
  tabBarOptions={{
    keyboardHidesTabBar: 'true',
    activeTintColor: '#D7192D',
    inactiveTintColor: '#777',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      height: '10%'
    },
  }}
>

  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Icon name="home"
                  size={size}
                  color={color}
            />
        ),
    }}
  />

  <Tab.Screen
    name="Search"
    component={SearchProfile}
    options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
            <Icon name="search1"
                  size={size}
                  color={color}
            />
        ),
    }}
  />
  <Tab.Screen
    name="Camera"
    component={AlertBeforePic}
    options={{
        tabBarLabel: 'Camera',
        tabBarIcon: ({ color, size }) => (
            <Icon name="camera"
                  size={size}
                  color={color}
            />
        ),
    }}
  />
  <Tab.Screen
    name="Notification"
    component={NotificationsScreen}
    options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => (
            <Icon name="notification"
                  size={size}
                  color={color}
            />
        ),
    }}
  />
  <Tab.Screen
    name="ProfileScreen"
    component={ProfileScreen}
    options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
            <Icon name="profile"
                  size={size}
                  color={color}
            />
        ),
    }}
  />
</Tab.Navigator>)
