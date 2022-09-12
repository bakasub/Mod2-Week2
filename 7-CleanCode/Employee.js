"use strict";
exports.__esModule = true;
exports.Employee = exports.gender = void 0;
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
    gender[gender["Other"] = 2] = "Other";
})(gender = exports.gender || (exports.gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, address) {
        this._fullName = fullName;
        this._gender = gender;
        this._address = address;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
