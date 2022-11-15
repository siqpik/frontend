import React from 'react';
import {ScrollView, Text} from 'react-native';
import Notification from './model/Notification';
import {getJson, patch} from '../service/ApiService';
import {AdmireRequestNotification} from "./AdmireRequestNotification";

export class NotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        this.getAllNotifications()

    }

    getAllNotifications = async () => {
        const notifs = await getJson('/notification')
        notifs.map(n => this.getAdmireRequests(n))
        //todo    //Añadir adm-request al state: What? o.O
        //    // añadir backend para aceptar admireRequest
    }

    getAdmireRequests(notification) {
        getJson(`/admire-request/${notification.eventId}`)
            .then(admireRequest => new Notification(notification, admireRequest))
            .then(ar => {
                this.setState(previous => ({
                    notifications: [...previous.notifications, ar]
                }))
            }).then(x => this.justClear())
            .then()
    }

    justClear = () => {
        this.state.notifications.map(notification => notification.id)
            .forEach(notificationId =>
                patch(`/notification/${notificationId}`, JSON.stringify({status: 'READ'}))
            )
    }

    acceptAdmireRequest = (requestId, result) => {
        patch(`/admire-request/${requestId}`)
    }

    render() {
        return (
            this.state.notifications
                ? <ScrollView>
                    {this.state.notifications
                        .map((notification, index) =>
                            notification.type === 'REQUEST' &&
                            <AdmireRequestNotification
                                key={notification.id + index}
                                id={notification.id}
                                username={notification.userInfo.username}
                                image={notification.userInfo.profilePicUrl}
                                status={notification.status}
                                accept={() => this.acceptAdmireRequest(notification.notifiableId)}
                                dismiss={() => alert('Will be deleted :)')}
                            />
                        )
                    }
                </ScrollView>
                :
                <Text>_______________________________Nothing to see here :)
                    _________________________________</Text>
        );
    }
}