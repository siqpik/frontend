export default class ProfileResult {
    constructor(json){
        this.name = json.name
        this.userName = json.userName
        this.avatarUrl = json.avatarUrl
    }
}