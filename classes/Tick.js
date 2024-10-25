import Entity from "./Entity"
import Component from "./Component"

export default class Tick extends Component {
    constructor() {
      super()
      this.entity = new Entity()
      this.className = "tick"
      this.velocity = {
        x: 1,
        y: 1
      }
      setInterval(this.tick.bind(this), 200)
    }
    tick() {
      this.entity.emit('move', this.velocity);
    }
  }
  