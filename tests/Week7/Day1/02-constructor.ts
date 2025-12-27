class Employee {

  // 🔹 Static variable (shared across all objects)
  static companyName: string = "Tech Solutions Ltd";

  // 🔹 Global / Instance variables
  public empName: string;
  public empTempId: string;
  private salary: number;

  // 🔹 Constructor (parameterised)
  constructor(name: string, tempId: string, salary: number) {
    console.log("Constructor called");

    this.empName = name;
    this.empTempId = tempId;
    this.salary = salary;
  }

  // 🔹 Method
  payroll(): void {
    console.log("Payroll processed for", this.empName);
  }

  // 🔹 Method using parameters
  employeeDetails(empId: string): void {
    console.log(`Employee ID passed as param: ${empId}`);
  }

  // 🔹 Method accessing global variables
  printDetails(): void {
    console.log(`Employee Name: ${this.empName}`);
    console.log(`Employee Temp ID: ${this.empTempId}`);
    console.log(`Company: ${Employee.companyName}`);
  }

  // 🔹 Private variable access via method
  printSalary(): void {
    console.log(`Salary: £${this.salary}`);
  }
}

/* ======================
   Object creation
====================== */

const emp1 = new Employee("Veer Karri", "T001", 60000);

emp1.payroll();
emp1.employeeDetails("101");
emp1.printDetails();
emp1.printSalary();

/* ======================
   Another object
====================== */

const emp2 = new Employee("Anil Kumar", "T002", 55000);
emp2.printDetails();
emp2.printSalary();