// Define and export a class named EmployeeSignUp
// 'export' allows this class to be imported and used in other files
export class EmployeeSignUp {

    // PUBLIC property
    // Accessible from anywhere (inside the class, outside the class, other files)
    // Stores the employee's name
    public eName = "Veer";

    // PUBLIC property
    // Employee ID that can be accessed and modified externally
    public eid = "E001";

    // PROTECTED property
    // Accessible ONLY within this class and its subclasses
    // NOT accessible directly from an object instance
    protected pNumber = 1234567890;

    // PRIVATE property
    // Accessible ONLY inside this class
    // Cannot be accessed directly outside the class
    private salary = 50000;

    // PUBLIC method
    // Returns nothing (void)
    // Prints all employee details to the console
    public printDetails(): void {

        // Accessing public property
        console.log(`Employee Name: ${this.eName}`);

        // Accessing public property
        console.log(`Employee ID: ${this.eid}`);

        // Accessing protected property (allowed inside the class)
        console.log(`Employee Phone Number: ${this.pNumber}`);

        // Accessing private property (allowed inside the class)
        console.log(`Employee Salary: £${this.salary}`);
    }

    // GETTER method
    // Allows controlled READ access to the private 'salary' variable
    // Called like a property: empSignUp.readData
    public get readData() {
        return this.salary;
    }

    // SETTER method
    // Allows controlled WRITE access to the private 'salary' variable
    // Accepts a number and updates salary
    // Called like an assignment: empSignUp.writeData = 60000
    public set writeData(sal: number) {
        this.salary = sal;
    }
}

// Create an object (instance) of the EmployeeSignUp class
const empSignUp = new EmployeeSignUp();

// Call the public method to print employee details
empSignUp.printDetails();

// Access private salary indirectly using the getter
console.log(`Accessing private salary via getter: £${empSignUp.readData}`);

// Update private salary indirectly using the setter
empSignUp.writeData = 60000;

// Verify the updated salary using the getter
console.log(`Updated Salary via getter: £${empSignUp.readData}`);
