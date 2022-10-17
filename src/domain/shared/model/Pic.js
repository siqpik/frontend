export default class Pic {
    constructor(pic){
        this.id = pic.id
        this.url = pic.url
        this.likes = pic.likes
        this.date = pic.date
        this.usersTag = pic.usersTag
        this.comments = pic.comments.reverse();
    }
}