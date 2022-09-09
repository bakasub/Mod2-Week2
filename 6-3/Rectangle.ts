import {Shape} from "./Shape";
import {Resizable} from "./Resizable";

export class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}

export class ResizableRectangle extends Rectangle implements Resizable{

    constructor(width: number, height: number, name: string) {
        super(width, height, name);
    }
    resize(percent: number) {
        this.width = this.width * percent / 100;
        this.height = this.height * percent / 100;
        return this;
    }
}