import {Employee} from "./Employee";
import {gender} from "./Employee";

export class Engineer extends Employee {
    private _major: string;

    constructor(fullName: string, gender: gender, address: string, major: string) {
        super(fullName, gender, address);
        this._major = major;
    }

    get major(): string {
        return this._major;
    }

    set major(value: string) {
        this._major = value;
    }
}