import {Employee} from "./Employee";
import {gender} from "./Employee";

export class Staff extends Employee{
    private _task: string;

    constructor(fullName: string, gender: gender, address: string, task: string) {
        super(fullName, gender, address);
        this._task = task;
    }

    get task(): string {
        return this._task;
    }

    set task(value: string) {
        this._task = value;
    }
}