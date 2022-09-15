export class Person {
    private _fullName: string;
    private _occupation: string;
    private _id: number;

    constructor(fullName: string, occupation: string, id: number) {
        this._fullName = fullName;
        this._occupation = occupation;
        this._id = id;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get occupation(): string {
        return this._occupation;
    }

    set occupation(value: string) {
        this._occupation = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}