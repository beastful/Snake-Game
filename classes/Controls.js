import System from "./System"
import Entity from "./Entity"

export default class Controls extends System {
    constructor() {
      super()
      this.entity = new Entity()
      this.tick = this.entity.getComponents("tick")[0]
      console.log()
      window.addEventListener("keydown", this.keydown.bind(this))
    }
    keydown(e) {
      const { code } = e
  
      if (code == "ArrowRight") {
        this.tick.velocity = {
          x: 1,
          y: 0,
        }
      }
  
      if (code == "ArrowLeft") {
        this.tick.velocity = {
          x: -1,
          y: 0,
        }
      }
  
      if (code == "ArrowUp") {
        this.tick.velocity = {
          x: 0,
          y: -1,
        }
      }
  
      if (code == "ArrowDown") {
        this.tick.velocity = {
          x: 0,
          y: 1,
        }
      }
    }
  }