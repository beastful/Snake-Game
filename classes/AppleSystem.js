import Entity from "./Entity"
import System from "./System"
import Apple from "./Apple"

export default class AppleSystem extends System {
    constructor() {
      super()
      this.entity = new Entity()
    }
    spawnApple() {
      const pos = {
        x: Math.floor(Math.random() * 40),
        y: Math.floor(Math.random() * 40)
      }
      this.entity.addComponent(new Apple(pos))
    }
  }
  