import {library} from "./Library";

export class Book extends library {
    private _author: string;
    private _pageCount: number;


    constructor(documentCode: number, publisher: string, issuedID: number, category: string, author: string, pageCount: number) {
        super(documentCode, publisher, issuedID, category);
        this._author = author;
        this._pageCount = pageCount;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get pageCount(): number {
        return this._pageCount;
    }

    set pageCount(value: number) {
        this._pageCount = value;
    }
}