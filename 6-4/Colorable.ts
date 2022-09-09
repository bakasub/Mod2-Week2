import {Square} from "./Square";

export interface Colorable {
    howToColor(color: string);
}

export class ColoredSquare extends Square implements Colorable{

    constructor(name: string, width: number) {
        super(name, width);
    }
    howToColor(color: string) {
        return `Color all for sides is ${color}`
    }
}