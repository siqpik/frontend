import React from 'react';
import {AppRegistry, Button, ScrollView} from "react-native";
import App from "../App";

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <Button
                    title={'Take a new Pic'}
                    onPress={() => navigate('TakeNewPic')}
                />
                <Button
                    title={'Go to my Profile'}
                    onPress={() => navigate('Profile')}
                />
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('Profile', () => App);
