export default class Notification {

    constructor(json){
        this.id = json.id;
        this.userName = json.userName;
        this.userProfilePic = json.userProfilePic;
        this.senderUserName = json.senderUserName;
        this.viewed = json.viewed;
        this.type = json.type;
        this.status = json.status;
    }
}
