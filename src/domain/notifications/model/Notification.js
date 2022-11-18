export default class Notification {

    constructor(notification, admireRequest) {
        this.id = notification.id;
        this.userInfo = new UserInfo(admireRequest.senderInfo);
        this.type = notification.type;
        this.notifiableId = admireRequest.id;
        this.date = notification.date;
        this.status = admireRequest.status
    }
}

class UserInfo {

    constructor(json) {
        this.username = json.userName
        this.profilePicUrl = json.profilePicUrl
    }
}