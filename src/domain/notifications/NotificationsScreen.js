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
    }

    getAdmireRequests(notification) {
        getJson(`/admire-request/${notification.eventId}`)
            .then(admireRequest =>
                null !== admireRequest
                    ? new Notification(notification, admireRequest)
                    : null
            )
            .then(ar => {
                if (ar !== null) {
                    if (ar?.status !== 'DISMISSED') {
                        this.setState(previous => ({
                            notifications: [...previous.notifications, ar]
                        }))
                    }
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

    dismissAdmirerRequest = requestId => deleteItem(`/admire-request/${requestId}`)
        .then(_ => {
            this.setState(previousState => {
                const notifications = previousState.notifications.filter(n => n.notifiableId !== requestId)

                return {notifications}
            })
        })

    goToProfile = username => this.props.navigation
        .navigate('ProfileOther', {
            userName: username
        })

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
                                goToProfile={() => this.goToProfile(notification.userInfo.username)}
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