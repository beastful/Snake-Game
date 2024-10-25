import Entity from "./Entity";
import Component from "./Component";
import AppleSystem from "./AppleSystem";

export default class SnakeUnit extends Component {
  constructor() {
    super()
    this.entity = new Entity();
    this.prev = null;
    this.className = "snake_unit";
    this.position = {
      x: 0,
      y: 0
    }
    this.entity.on('move', this.move.bind(this))
    this.entity.on('append', this.append.bind(this))
    this.entity.on("collect", this.collect.bind(this))
    this.appleSystem = new AppleSystem()
  }
  append() {
    if (this.prev == null) {
      this.prev = new SnakeUnit(false);
    }
  }
  move(velocity) {
    if (this.entity.getComponents("apple").filter(a => a.eliminated == false).length <= 0) {
      this.appleSystem.spawnApple()
    }

    if (this.prev == null) {
      let apple = this.entity.getComponents("apple").filter(a => a.eliminated == false)[0]
      console.log(apple)
      if (this.position.x == apple.position.x && this.position.y == apple.position.y) {
        apple.eliminate()
        this.entity.emit('append')
      }

      if (this.position.x >= 40) {
        this.position.x = 0
      }
      if (this.position.x < 0) {
        this.position.x = 40
      }
      if (this.position.y >= 40) {
        this.position.y = 0
      }
      if (this.position.y < 0) {
        this.position.y = 40
      }
      this.position.x += velocity.x
      this.position.y += velocity.y
      return
    }
    this.position.x = this.prev.position.x
    this.position.y = this.prev.position.y
  }
  collect(arr) {
    arr.push(this)
  }
}