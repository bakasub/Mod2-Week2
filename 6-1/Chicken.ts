import {Animal} from "./Animal";
import {Edible} from "./Edible";

export class Chicken extends Animal implements Edible{
    makeSound():string {
        return "Chimkens chip chip"
    }
    howToEat(): string {
        return 'KFC that shit breh'
    }
}