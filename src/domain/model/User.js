import Pic from "../shared/model/Pic";

export default class User {
  constructor(json) {
    this.name = json.name;
    this.userName = json.userName;
    this.postsCount = json.postsCount
    this.admirersCount = json.admirersCount;
    this.admiredCount = json.admiredCount;
    this.profilePicUrl = json.profilePicUrl;
    this.hasPendingRequest = json.hasPendingRequest;
    this.amIAdmirer = json.amIAdmirer;
    this.isLoggedUser = json.isLoggedUser;
  }
}
