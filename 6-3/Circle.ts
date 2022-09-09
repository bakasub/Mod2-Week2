import {Shape} from "./Shape";
import {Resizable} from "./Resizable";

export class Circle extends Shape {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
}

export class ResizableCircle extends Circle implements Resizable {

    constructor(name: string, radius: number) {
        super(name, radius);
    }

    resize(percent: number) {
        return this.radius * percent / 100
    }
}