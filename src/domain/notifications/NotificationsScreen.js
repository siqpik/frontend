import React from 'react';
import {ScrollView, Text} from 'react-native';
import Notification from './model/Notification';
import {getJson, patch, post} from '../service/ApiService';
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

        //.then(async json => {
        //    //todo Call put  notifi here
        //    let maped = await json.map(notification => this.getAdmireRequests(notification))
//
        //    console.log(maped, 88)
//
        //    //TODO: Quitar ya el punto rojo y mandar put para quitar el NEW de la notificacion: maybe post para cambiar el estado de la notificación
        //    //Añadir request al state
        //    //Añadir la vista de la request con los botones de aceptar e ignorar
        //    // añadir backend para aceptar
        //    //
//
        //})
        //.then(notifications => console.log(/**JSON.stringify(notifications)**/))
        //.then(() => console.log(JSON.stringify(this.state.notifications)))
        //.catch(/*alert*/);
    }

    getAdmireRequests(notification) {
        getJson(`/admire-request/${notification.eventId}`)
            .then(admireRequest => new Notification(notification, admireRequest))
            .then(ar => {
                console.log(JSON.stringify(ar))
                this.setState(previous => ({
                    notifications: [...previous.notifications, ar]
                }))
            })
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