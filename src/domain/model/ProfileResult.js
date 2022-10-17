export default class ProfileResult {
    constructor(json){
        this.name = json.displayName
        this.userName = json.userName
        this.avatarUrl = json.profilePicUrl
    }
}
