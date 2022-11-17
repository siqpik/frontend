import React from 'react';
import {ScrollView, Text} from 'react-native';
import Notification from './model/Notification';
import {deleteItem, getJson, patch} from '../service/ApiService';
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
        //todo    //Añadir adm-request al state: What? o.O= change the request in the state to know is already admire inmidiatly and hide the buttons
        //    // añadir backend para aceptar admireRequest
    }

    getAdmireRequests(notification) {
        getJson(`/admire-request/${notification.eventId}`)
            .then(admireRequest => {
                console.log(JSON.stringify(admireRequest))
                return new Notification(notification, admireRequest)
            })
            .then(ar => {
                if (ar.status !== 'DISMISSED') {
                    this.setState(previous => ({
                        notifications: [...previous.notifications, ar]
                    }))
                }
            }).then(_ => this.clearNewNotifications())
            .then()
    }

    clearNewNotifications = () => {
        this.state.notifications.map(notification => notification.id)
            .forEach(notificationId =>
                patch(`/notification/${notificationId}`, JSON.stringify({status: 'READ'}))
            )
    }

    acceptAdmireRequest = requestId => patch(`/admire-request/${requestId}`)
        .then(_ => {
            this.setState(previousState => {
                const notifications = [...previousState.notifications];
                const indexToChange = notifications.findIndex(req => req.notifiableId === requestId)

                notifications[indexToChange] = {
                    ...notifications[indexToChange],
                    status: "ACCEPTED"
                }

                return {notifications}
            })
        })

    dismissAdmirerRequest = requestId => {
        deleteItem(`/admire-request/${requestId}`)
            .then(_ => {
                this.setState(previousState => {
                    const notifications = previousState.notifications.filter(n => n.notifiableId !== requestId)

                    return {notifications}
                })
            })
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
                                dismiss={() => this.dismissAdmirerRequest(notification.notifiableId)}
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