import {library} from "./Library";

export class NewsPaper extends library{
    private _issuedDate: number;


    constructor(documentCode: number, publisher: string, issuedID: number, category: string, issuedDate: number) {
        super(documentCode, publisher, issuedID, category);
        this._issuedDate = issuedDate;
    }

    get issuedDate(): number {
        return this._issuedDate;
    }

    set issuedDate(value: number) {
        this._issuedDate = value;
    }
}