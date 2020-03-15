import Pic from "../shared/model/Pic";

export default class User {
    constructor(json){
        this.name = json.name;
        this.pics = json.pics.map(jsonPic => new Pic(jsonPic));
        this.admirers = json.admirers;
        this.admiring = json.admiring;
        this.profilePicUrl = json.profilePicUrl;
        this.requestStatus = json.requestStatus;
        this.isAdmiring = json.isAdmiring;
        this.isActualUser = json.isActualUser;
    }
}