import React from 'react';
import {ScrollView, Text} from 'react-native';
import {RequestAdmireNotification} from './RequestAdmireNotification';
import Notification from './model/Notification';
import {getJson, post} from '../service/ApiService';

export class NotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: undefined
        }
    }

    componentDidMount() {
        getJson('/notification')
            .then(json => {
                console.log(JSON.stringify(json));
                return json.map(notification => new Notification(notification))
            })
            .then(notifications => this.setState({notifications}))
            .catch(/*alert*/);
    }

    responseToAdmireRequest = (requestId, result) => {
        post(`/request/${requestId}/${result}`)
            .then(response => {
                response.status === 200 || response.status === 201
                    ? this.state.notifications.find(notification => notification.id === requestId)
                        .status = result ? 'Accepted' : 'Canceled'
                    : alert("Opps, something went wrong, try again later");
                this.setState({notifications: this.state.notifications})
            })
            .catch(alert);

        getJson('/newNotifications')
            .then()
            // .then(json => alert(JSON.stringify(json)))
            .catch(alert)
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
