import {EmployeeManagement} from "./EmployeeManagement";
import {Worker} from "./Worker";
import {Engineer} from "./Engineer";
import {Staff} from "./Staff";

let employManage= new EmployeeManagement()
let worker1 = new Worker('Deez Nuts',0,'This address',6)
let engineer1 = new Engineer('Lig Ma',1,'That address','balls')
let staff1 = new Staff('Vi Loose',2,'Somewhere', 'elnosabe')
employManage.addEmployee(worker1)
employManage.addEmployee(engineer1)
employManage.addEmployee(staff1)
// employManage.displayList()
console.log(employManage.filterByName('Lig Ma'))
