import PostUserInfo from "../../shared/model/PostUserInfo";

export default class Post {
  id: String
  userInfo: PostUserInfo
  date: Date
  likesCount: Number
  commentsCount: String
  statement: String
  mediaUrl: String
  comments: []
  likes: []
  iReacted: String
  constructor(json) {
    this.id = json.id
    this.userInfo = new PostUserInfo(json.userInfo)
    this.date = json.date
    this.likesCount = json.reactionsCount
    this.commentsCount = json.commentsCount
    this.statement = json.statement
    this.mediaUrl = json.mediaUrl
    this.comments = []
    this.likes = []
    this.iReacted = json.iReacted
  }
}
