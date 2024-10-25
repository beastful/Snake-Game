import Component from "./Component"

export default class Apple extends Component {
    constructor(pos) {
        super()
        this.position = pos
        this.eliminated = false
        this.className = "apple"
    }
    eliminate() {
        this.eliminated = true
    }
}
