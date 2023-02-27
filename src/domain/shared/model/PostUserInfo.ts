export default class PostUserInfo {

  username: String
  profilePicUrl: String
  constructor(userInfo: PostUserInfo) {
    this.username = userInfo.username;
    this.profilePicUrl = userInfo.profilePicUrl;
  }
}
