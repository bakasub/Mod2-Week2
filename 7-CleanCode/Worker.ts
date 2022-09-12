import {Employee} from "./Employee";
import {gender} from "./Employee";

export class Worker extends Employee{
    private _level: number;

    constructor(fullName: string, gender: gender, address: string, level: number) {
        super(fullName, gender, address);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}