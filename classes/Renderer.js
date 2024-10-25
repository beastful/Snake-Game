import Entity from "./Entity"
import Component from "./Component"

export default class Renderer extends Component {
    constructor() {
        super()
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)
        this.width = 400
        this.height = 400
        this.uHeigth = 10
        this.uWidth = 10
        this.gSize = 40
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");
        this.entity = new Entity();
        this.entity.on("move", this.tick.bind(this))
        this.snake = this.entity.getComponents("snake_unit")[0]
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
        this.entity.emit("append")
    }
    tick() {
        this.snakeArr = []
        this.entity.emit("collect", this.snakeArr)
        this.snakePos = this.snakeArr.map(u => u.position)
        this
        this.fillGrid((i, j) => {
            let includes = false
            let apple = this.entity.getComponents("apple").filter(a => a.eliminated == false)[0]

            for (let pos of this.snakePos) {
                if (pos.x == i && pos.y == j) {
                    includes = true
                }
            }
            if (includes) {
                this.context.fillStyle = "lime"
            } else {
                this.context.fillStyle = "black"
            }
            if (!apple) return;
            if (apple.position.x == i && apple.position.y == j) {
                this.context.fillStyle = "red"
            }
        })
    }
    fillGrid(except) {
        for (let i = 0; i <= this.gSize; i++) {
            for (let j = 0; j <= this.gSize; j++) {
                except(i, j)
                this.context.fillRect(this.uWidth * i, this.uHeigth * j, this.uWidth, this.uHeigth)
            }
        }
    }
}
