import {Edible} from "./Edible";

export abstract class Fruits implements Edible{
    abstract howToEat(): string;
}

export class Apple extends Fruits{
    howToEat(): string {
        return "Slice the apple you dummy";
    }
}

export class Orange extends Fruits{
    howToEat(): string {
        return "Make juice with the orange";
    }

}
