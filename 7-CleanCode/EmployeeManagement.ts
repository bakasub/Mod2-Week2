import {Employee} from "./Employee";

export class EmployeeManagement {
    public _employeeList = [];

    get employeeList(): any[] {
        return this._employeeList;
    }

    set employeeList(value: any[]) {
        this._employeeList = value;
    }

    addEmployee(person: Employee) {
        this._employeeList.push(person)
    }

    filterByName(fullName: string):Employee {
        for (let i = 0; i < this.employeeList.length; i++) {
            if (this.employeeList[i].fullName == fullName) {
                return this.employeeList[i];
            }
        }
    }

    displayList() {
        console.log(this.employeeList)
    }
}