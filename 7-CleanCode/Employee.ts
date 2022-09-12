export enum gender {
    Male,
    Female,
    Other,
}

export class Employee {

    private _fullName: string;
    private _gender: gender;
    private _address: string;

    constructor(fullName: string, gender: gender, address: string) {
        this._fullName = fullName;
        this._gender = gender;
        this._address = address;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get gender(): gender {
        return this._gender;
    }

    set gender(value: gender) {
        this._gender = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}
