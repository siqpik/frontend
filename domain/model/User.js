export default class User {
    constructor(json){
        this.id = json.id
        this.name = json.name
        this.pics = json.pics.map(jsonPic => new Pic(jsonPic))
    }
}

class Pic {
    constructor(jsonPic){
        this.url = jsonPic.url
    }
}
