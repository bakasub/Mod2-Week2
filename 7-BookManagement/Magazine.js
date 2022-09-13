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
exports.Magazine = void 0;
var Library_1 = require("./Library");
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(documentCode, publisher, issuedID, category, issuedNumber, issuedMonth) {
        var _this = _super.call(this, documentCode, publisher, issuedID, category) || this;
        _this._issuedNumber = issuedNumber;
        _this._issuedMonth = issuedMonth;
        return _this;
    }
    Object.defineProperty(Magazine.prototype, "issuedNumber", {
        get: function () {
            return this._issuedNumber;
        },
        set: function (value) {
            this._issuedNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Magazine.prototype, "issuedMonth", {
        get: function () {
            return this._issuedMonth;
        },
        set: function (value) {
            this._issuedMonth = value;
        },
        enumerable: false,
        configurable: true
    });
    return Magazine;
}(Library_1.library));
exports.Magazine = Magazine;
