import PostUserInfo from "../../shared/model/PostUserInfo";

export default class Post {
  constructor(json) {
    this.id = json.id
    this.userInfo = new PostUserInfo(json.userInfo)
    this.date = json.date
    this.likesCount = json.likesCount
    this.commentsCount = json.commentsCount
    this.statement = json.statement
    this.mediaUrl = json.mediaUrl
    this.comments = []
    this.likes = []
    this.iReacted = json.iReacted
  }
}
