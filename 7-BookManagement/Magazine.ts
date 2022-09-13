import {library} from "./Library";

export class Magazine extends library {
    private _issuedNumber: number;
    private _issuedMonth: number;


    constructor(documentCode: number, publisher: string, issuedID: number, category: string, issuedNumber: number, issuedMonth: number) {
        super(documentCode, publisher, issuedID, category);
        this._issuedNumber = issuedNumber;
        this._issuedMonth = issuedMonth;
    }

    get issuedNumber(): number {
        return this._issuedNumber;
    }

    set issuedNumber(value: number) {
        this._issuedNumber = value;
    }

    get issuedMonth(): number {
        return this._issuedMonth;
    }

    set issuedMonth(value: number) {
        this._issuedMonth = value;
    }
}