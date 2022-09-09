import {Circle} from "./Circle";

export interface Comparable {
    compareTo(o: Object): number;
}

export class ComparableCircle extends Circle implements Comparable {

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.radius > o.radius) return 1;
        else if (this.radius < o.radius) return -1;
        else return 1;

    }
}