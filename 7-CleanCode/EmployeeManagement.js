"use strict";
exports.__esModule = true;
exports.EmployeeManagement = void 0;
var EmployeeManagement = /** @class */ (function () {
    function EmployeeManagement() {
        this._employeeList = [];
    }
    Object.defineProperty(EmployeeManagement.prototype, "employeeList", {
        get: function () {
            return this._employeeList;
        },
        set: function (value) {
            this._employeeList = value;
        },
        enumerable: false,
        configurable: true
    });
    EmployeeManagement.prototype.addEmployee = function (person) {
        this._employeeList.push(person);
    };
    EmployeeManagement.prototype.filterByName = function (fullName) {
        for (var i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i].fullName == fullName) {
                return this.employeeList[i];
            }
        }
    };
    EmployeeManagement.prototype.displayList = function () {
        console.log(this.employeeList);
    };
    return EmployeeManagement;
}());
exports.EmployeeManagement = EmployeeManagement;
