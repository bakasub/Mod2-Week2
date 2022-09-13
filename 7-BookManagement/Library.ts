export class library {
    private _documentCode: number;
    private _publisher: string;
    private _issuedID: number;
    private _category: string;


    constructor(documentCode: number, publisher: string, issuedID: number, category: string) {
        this._documentCode = documentCode;
        this._publisher = publisher;
        this._issuedID = issuedID;
        this._category = category;
    }

    get documentCode(): number {
        return this._documentCode;
    }

    set documentCode(value: number) {
        this._documentCode = value;
    }

    get publisher(): string {
        return this._publisher;
    }

    set publisher(value: string) {
        this._publisher = value;
    }

    get issuedID(): number {
        return this._issuedID;
    }

    set issuedID(value: number) {
        this._issuedID = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }
}