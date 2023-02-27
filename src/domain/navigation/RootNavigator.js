import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import {SearchProfile} from '../profile/search/SearchProfile';
import {AlertBeforePic} from '../camera/AlertBeforePic';
import {NotificationsScreen} from '../notifications/NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {getJson} from "../service/ApiService";
import IconBadge from 'react-native-icon-badge';
import {Text} from "react-native";

const Tab = createBottomTabNavigator();

export default () => {
    const [notificationsCount, setNotificationsCount] = useState(0);

    useEffect(() => {
        getNotificationsCount();
    }, []);

    const resetNotificationsCount = () => setNotificationsCount(0)

    const getNotificationsCount = () => {
        getJson('/notification/new/count')
            .then(count => {
                setNotificationsCount(count)
            })
    }

    return (<Tab.Navigator
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
            listeners={{
                tabPress: e => {
                    resetNotificationsCount()
                }
            }}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => (
                    <IconBadge
                        MainElement={
                            <Icon name="notification"
                                  size={size}
                                  color={color}
                            />
                        }
                        BadgeElement={
                            <Text style={{color: '#FFFFFF'}}>{notificationsCount}</Text>
                        }
                        IconBadgeStyle={
                            {
                                width: 10,
                                height: 20,
                                backgroundColor: '#FF0000'
                            }
                        }
                        Hidden={notificationsCount === 0}
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
                    <Icon name="user"
                          size={size}
                          color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>)
}
