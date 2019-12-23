import React from 'react';
import {ScrollView, Text, FlatList, View} from "react-native";
import {getJson, post} from "../service/AuthenticationService";
import {RequestAdmireNotification} from './RequestAdmireNotification'
import Notification from './model/Notification'

export class NotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: undefined
        }
    }

    componentDidMount() {
        getJson('/notifications')
            .then(json => json.map(notification => new Notification(notification)))
            .then(notifications => this.setState({notifications}))
            .catch(alert);
    }

    responseToAdmireRequest = (requestId, result) => {
        post(`/request/${requestId}/${result}`)
            .then(response => response.status === 404 || response.status === 401 ? alert('Something went wrong') : alert('All OK'))
            .catch(alert);
    }

    render() {
        return (
            <ScrollView>
                {this.state.notifications
                    ? (this.state.notifications.map(not =>
                            <RequestAdmireNotification
                                key={not.id}
                                id={not.id}
                                name={not.senderUserName}
                                image={not.userProfilePic}
                                status={not.status}
                                accept={() => this.responseToAdmireRequest(not.id, true)}
                                dismiss={() => this.responseToAdmireRequest(not.id, false)}
                            />)
                    )
                    : <Text>Loading...</Text>
                }
            </ScrollView>
        );
    }

}
