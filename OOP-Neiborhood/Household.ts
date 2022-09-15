import {Person} from "./Person";

export class Household {
    private _memberCount: number;
    private _houseAddress: string;
    private _houseId: number;
    _members: Person[] = []


    constructor(houseAddress: string, houseId: number, members: Person[]) {
        this._houseAddress = houseAddress;
        this._houseId = houseId;
        this._members = members;
        this._memberCount = this._members.length
    }

    get houseAddress(): string {
        return this._houseAddress;
    }

    set houseAddress(value: string) {
        this._houseAddress = value;
    }

    get houseId(): number {
        return this._houseId;
    }

    set houseId(value: number) {
        this._houseId = value;
    }

    get members(): Person[] {
        return this._members;
    }

    set members(value: Person[]) {
        this._members = value;
    }

    get memberCount(): number {
        return this._memberCount;
    }

    set memberCount(value: number) {
        this._memberCount = value;
    }
}