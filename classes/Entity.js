import EM from "./EM";

export default class Entity extends EM {
    static instance = null;
    constructor() {
        super();
        if (Entity.instance != null) return Entity.instance
        Entity.instance = this

        this.components = []
    }
    addComponent(component) {
        this.components.push(component)
    }
    getComponents(className) {
        return this.components.filter(c => {
            if (c.className == className) {
                return c
            }
        })
    }
}