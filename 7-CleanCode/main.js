"use strict";
exports.__esModule = true;
var EmployeeManagement_1 = require("./EmployeeManagement");
var Worker_1 = require("./Worker");
var Engineer_1 = require("./Engineer");
var Staff_1 = require("./Staff");
var employManage = new EmployeeManagement_1.EmployeeManagement();
var worker1 = new Worker_1.Worker('Deez Nuts', 0, 'This address', 6);
var engineer1 = new Engineer_1.Engineer('Lig Ma', 1, 'That address', 'balls');
var staff1 = new Staff_1.Staff('Vi Loose', 2, 'Somewhere', 'elnosabe');
employManage.addEmployee(worker1);
employManage.addEmployee(engineer1);
employManage.addEmployee(staff1);
// employManage.displayList()
console.log(employManage.filterByName('Lig Ma'));
