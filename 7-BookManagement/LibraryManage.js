"use strict";
exports.__esModule = true;
exports.LibraryManage = void 0;
var LibraryManage = /** @class */ (function () {
    function LibraryManage() {
        this._library = [];
    }
    Object.defineProperty(LibraryManage.prototype, "library", {
        get: function () {
            return this._library;
        },
        set: function (value) {
            this._library = value;
        },
        enumerable: false,
        configurable: true
    });
    LibraryManage.prototype.add = function (document) {
        this._library.push(document);
    };
    LibraryManage.prototype.display = function () {
        console.log(this._library);
    };
    LibraryManage.prototype.removeById = function (id) {
        for (var i = 0; i < this._library.length; i++) {
            if (id == this._library[i].issuedID) {
                this._library.splice(i, 1);
            }
        }
    };
    LibraryManage.prototype.filterByCategory = function (input) {
        var filteredDocs = [];
        for (var i = 0; i < this._library.length; i++) {
            if (input == this._library[i].category) {
                filteredDocs.push(this._library[i]);
            }
        }
        return filteredDocs;
    };
    return LibraryManage;
}());
exports.LibraryManage = LibraryManage;
