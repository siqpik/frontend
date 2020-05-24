import Pic from "../../shared/model/Pic";

export default class Post {
    constructor(json) {
        this.profilePicUrl = json.profilePicUrl;
        this.userName = json.userName;
        this.photo = new Pic(json.photo);
        this.ilikeThisPic = json.ilikeThisPic;
    }
}