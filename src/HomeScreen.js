import React from 'react';
import {AppRegistry, Button, ScrollView} from "react-native";
import App from "../App";

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to Siqpik',
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <Button
                    title={'Take a new Pic'}
                    onPress={() => navigate('Alert')}
                />
                <Button
                    title={'Go to my Profile'}
                    onPress={() => navigate('Profile')}
                />
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('HomeScreen', () => App);
