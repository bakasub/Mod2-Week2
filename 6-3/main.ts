import {ResizableCircle} from "./Circle";
import {ResizableRectangle} from "./Rectangle";

let ResizeCircle = new ResizableCircle('Circle1', 10)
let CirRadResize = ResizeCircle.resize(175)
console.log(`The circle new radius is ${CirRadResize}`)

let ResizeRect = new ResizableRectangle(20,10,'Rect1')
let NewRect = ResizeRect.resize(250)
console.log(`The new rectangle has a width of ${NewRect.width} and a height of ${NewRect.height}`)