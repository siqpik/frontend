import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import * as React from "react";
import {Text} from "react-native";
import HomeScreen from "../home/HomeScreen";
import {Profile} from "../profile/Profile";
import {AlertBeforePic} from "../camera/AlertBeforePic";
import {SearchProfile} from "../profile/search/SearchProfile";
import {NotificationsScreen} from "../notifications/NotificationsScreen";

const bottomNavSettings = createBottomTabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "",
                tabBarIcon: ({tintColor}) => (
                    <Text style={{color: tintColor}}>Home</Text>
                )
            }
        },
        Search: {
            screen: SearchProfile,
            navigationOptions: {
                title: "",
                tabBarIcon: ({tintColor}) => (
                    <Text style={{color: tintColor}}>Search</Text>
                )
            }
        },
        TakeNewPic: {
            screen: AlertBeforePic,
            navigationOptions: {
                title: "",
                tabBarIcon: ({tintColor}) => (
                    <Text style={{color: tintColor}}>Camera</Text>
                )
            }
        },
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: {
                title: "",
                tabBarIcon: ({tintColor}) => (
                    <Text style={{color: tintColor}}>Notifications</Text>
                )
            }
        },
        MyProfile: {
            screen: Profile,
            navigationOptions: {
                title: "",
                tabBarIcon: ({tintColor}) => (
                    <Text style={{color: tintColor}}>Profile</Text>
                )
            }
        },
    },
    {
        tabBarOptions:{
            activeTintColor: '#D7192D',
            inactiveTintColor: '#777',
            style: {
                height: 50
            }
        }
    });

export default createStackNavigator({ bottomNavSettings }, { headerMode: "none" });

