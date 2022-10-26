import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import {SearchProfile} from '../profile/search/SearchProfile';
import {AlertBeforePic} from '../camera/AlertBeforePic';
import {NotificationsScreen} from '../notifications/NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default () => (<Tab.Navigator
    screenOptions={() => ({
      "tabBarHideOnKeyboard": "true",
      "tabBarActiveTintColor": "#D7192D",
      "tabBarInactiveTintColor": "#777",
      "tabBarLabelStyle": {
        "fontSize": 14
      },
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
      ]

    })}
>

  <Tab.Screen
      name="Siqpik"
      component={HomeScreen}
      options={{
        //headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
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
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
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
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
            <Icon name="camera"
                  size={size}
                  color={color}
            />
        ),
      }}
  />
  <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
            <Icon name="profile"
                  size={size}
                  color={color}
            />
        ),
      }}
  />
</Tab.Navigator>)
