import './style.css'
import Entity from './classes/Entity'
import Tick from './classes/Tick'
import SnakeUnit from './classes/SnakeUnit'
import Controls from './classes/Controls'
import Renderer from './classes/Renderer'

const entity = new Entity()
const tick = new Tick()
entity.addComponent(tick)

const snake = new SnakeUnit()
entity.addComponent(snake)

const controls = new Controls()
const renderer = new Renderer()
entity.addComponent(renderer)