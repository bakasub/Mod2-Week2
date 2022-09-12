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
exports.Staff = void 0;
var Employee_1 = require("./Employee");
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(fullName, gender, address, task) {
        var _this = _super.call(this, fullName, gender, address) || this;
        _this._task = task;
        return _this;
    }
    Object.defineProperty(Staff.prototype, "task", {
        get: function () {
            return this._task;
        },
        set: function (value) {
            this._task = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}(Employee_1.Employee));
exports.Staff = Staff;
