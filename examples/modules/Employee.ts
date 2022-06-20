export let age: number = 30;
export class Employee {
  employeeID: number;
  employeeName: string;
  constructor(name: string, code: number) {
    this.employeeName = name;
    this.employeeID = code;
  }
  printEmployee() {
    console.log(
      "Employee ID: " +
        this.employeeID +
        ", Employee Name: " +
        this.employeeName
    );
  }
}
let companyName: string = "The Boring Company";
