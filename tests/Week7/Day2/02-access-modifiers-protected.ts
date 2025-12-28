import { EmployeeSignUp } from "./01-access-modifiers";

// HR class extends EmployeeSignUp, so it can access protected members
class HR extends EmployeeSignUp {

    // Method to update employee details
    empUpdate() {
        // Accessing the protected property 'pNumber' from the parent class
        // This is allowed because 'pNumber' is protected, not private
        this.pNumber = 9876543210;
    }
}

// Creating an instance of the HR class
let hrEmp = new HR();

// Calling the method that updates the protected property
hrEmp.empUpdate();
