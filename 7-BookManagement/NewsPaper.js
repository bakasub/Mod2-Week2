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
exports.NewsPaper = void 0;
var Library_1 = require("./Library");
var NewsPaper = /** @class */ (function (_super) {
    __extends(NewsPaper, _super);
    function NewsPaper(documentCode, publisher, issuedID, category, issuedDate) {
        var _this = _super.call(this, documentCode, publisher, issuedID, category) || this;
        _this._issuedDate = issuedDate;
        return _this;
    }
    Object.defineProperty(NewsPaper.prototype, "issuedDate", {
        get: function () {
            return this._issuedDate;
        },
        set: function (value) {
            this._issuedDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return NewsPaper;
}(Library_1.library));
exports.NewsPaper = NewsPaper;
