export default class Notification {

    constructor(json){
        this.id = json.id;
        this.type = json.type;
        this.notificableId = json.notificableId;
        this.date = json.date;
    }
}
