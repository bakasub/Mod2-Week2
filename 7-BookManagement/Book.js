"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Book = void 0;
var Library_1 = require("./Library");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(documentCode, publisher, issuedID, category, author, pageCount) {
        var _this = _super.call(this, documentCode, publisher, issuedID, category) || this;
        _this._author = author;
        _this._pageCount = pageCount;
        return _this;
    }
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "pageCount", {
        get: function () {
            return this._pageCount;
        },
        set: function (value) {
            this._pageCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}(Library_1.library));
exports.Book = Book;
