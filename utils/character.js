export default class Character {
    constructor(obj,type) {
        this.type = type;
        this.stats = this.addStats(type,obj);
        this.isSaved = false;
    }

    addStats(type,obj) {
        if (type === 'player') {
            return {
                name: obj.name,
                initiative:obj.initiative
            }
        } else {
            return obj;
        }
    }
}