import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import {SearchProfile} from '../profile/search/SearchProfile';
import {AlertBeforePic} from '../camera/AlertBeforePic';
import {NotificationsScreen} from '../notifications/NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import React from 'react';
import {Text} from 'react-native';

const getOptions = name => ({
    tabBarLabel: name,
    tabBarIcon: ({tintColor}) => (
      <Text style={{color: tintColor}}/>
    ),
  })

const Tab = createBottomTabNavigator();

export default () => (<Tab.Navigator
  tabBarOptions={{
    activeTintColor: '#D7192D',
    inactiveTintColor: '#777',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      height: 50
    },
  }}
>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={getOptions('Home')}
  />
  <Tab.Screen
    name="Search"
    component={SearchProfile}
    options={getOptions('Search')}
  />
  <Tab.Screen
    name="Camera"
    component={AlertBeforePic}
    options={getOptions('Camera')}
  />
  <Tab.Screen
    name="Notification"
    component={NotificationsScreen}
    options={getOptions('Notification')}
  />
  <Tab.Screen
    name="ProfileScreen"
    component={ProfileScreen}
    options={getOptions('Profile')}
  />
</Tab.Navigator>)
