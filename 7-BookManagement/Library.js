"use strict";
exports.__esModule = true;
exports.library = void 0;
var library = /** @class */ (function () {
    function library(documentCode, publisher, issuedID, category) {
        this._documentCode = documentCode;
        this._publisher = publisher;
        this._issuedID = issuedID;
        this._category = category;
    }
    Object.defineProperty(library.prototype, "documentCode", {
        get: function () {
            return this._documentCode;
        },
        set: function (value) {
            this._documentCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(library.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (value) {
            this._publisher = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(library.prototype, "issuedID", {
        get: function () {
            return this._issuedID;
        },
        set: function (value) {
            this._issuedID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(library.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    return library;
}());
exports.library = library;
