var Employee = /** @class */ (function () {
    // 🔹 Constructor (parameterised)
    function Employee(name, tempId, salary) {
        console.log("Constructor called");
        this.empName = name;
        this.empTempId = tempId;
        this.salary = salary;
    }
    // 🔹 Method
    Employee.prototype.payroll = function () {
        console.log("Payroll processed for", this.empName);
    };
    // 🔹 Method using parameters
    Employee.prototype.employeeDetails = function (empId) {
        console.log("Employee ID passed as param: ".concat(empId));
    };
    // 🔹 Method accessing global variables
    Employee.prototype.printDetails = function () {
        console.log("Employee Name: ".concat(this.empName));
        console.log("Employee Temp ID: ".concat(this.empTempId));
        console.log("Company: ".concat(Employee.companyName));
    };
    // 🔹 Private variable access via method
    Employee.prototype.printSalary = function () {
        console.log("Salary: \u00A3".concat(this.salary));
    };
    // 🔹 Static variable (shared across all objects)
    Employee.companyName = "Tech Solutions Ltd";
    return Employee;
}());
/* ======================
   Object creation
====================== */
var emp1 = new Employee("Veer Karri", "T001", 60000);
emp1.payroll();
emp1.employeeDetails("101");
emp1.printDetails();
emp1.printSalary();
/* ======================
   Another object
====================== */
var emp2 = new Employee("Anil Kumar", "T002", 55000);
emp2.printDetails();
emp2.printSalary();
