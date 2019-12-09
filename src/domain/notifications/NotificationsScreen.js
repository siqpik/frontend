import React from 'react';
import {ScrollView, Text, FlatList, View} from "react-native";
import {getJson} from "../service/AuthenticationService";
import {RequestAdmireNotification} from './RequestAdmireNotification'

export class NotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: undefined
        }
    }

    componentDidMount() {
        getJson('/notifications')
            // .then(json => alert(JSON.stringify(json)))
            .then(json => this.setState({notifications: json}))
            .catch(alert);
    }

    render() {
        return (
            <ScrollView>
                {this.state.notifications
                    ? (
                        <View>
                        <FlatList data={this.state.notifications} renderItem={({item}) =>
                            <RequestAdmireNotification
                                name={item.userName}
                                image={item.userProfilePic}
                            />
                        }/>
                        </View>
                    )
                    : (<Text>Loading...</Text>)
                }
            </ScrollView>
        );
    }
}
