// ===============================
// Interface (Contract)
// ===============================
interface IEmployee {
    printDetails(): void;
}

// ===============================
// Class Definition
// ===============================
export class EmployeeSignUpWithConstructor implements IEmployee {

    // STATIC property (shared across all instances)
    static companyName: string = "Tech Solutions Ltd";

    // CONSTRUCTOR with parameter properties
    constructor(
        public eName: string,             // public
        public readonly eid: string,      // readonly (cannot be changed)
        protected pNumber: number,        // protected
        private salary: number            // private
    ) {}

    // PUBLIC method
    public printDetails(): void {
        console.log(`Company Name: ${EmployeeSignUpWithConstructor.companyName}`);
        console.log(`Employee Name: ${this.eName}`);
        console.log(`Employee ID: ${this.eid}`);
        console.log(`Employee Phone Number: ${this.pNumber}`);
        console.log(`Employee Salary: £${this.salary}`);
    }

    // GETTER (read-only access to private salary)
    public get readData(): number {
        return this.salary;
    }

    // SETTER (controlled write access)
    public set writeData(sal: number) {
        if (sal < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.salary = sal;
    }

    // STATIC method
    static changeCompanyName(name: string): void {
        EmployeeSignUpWithConstructor.companyName = name;
    }
}

// ===============================
// Object Creation & Usage
// ===============================
const empSignUp = new EmployeeSignUpWithConstructor(
    "Veer Karri",
    "EMP123",
    9876543210,
    50000
);

// Call instance method
empSignUp.printDetails();

// Access private salary via getter
console.log(`Salary via getter: £${empSignUp.readData}`);

// Update salary via setter
empSignUp.writeData = 60000;
console.log(`Updated Salary: £${empSignUp.readData}`);

// ❌ Not allowed (readonly)
// empSignUp.eid = "EMP999";

// Static access
EmployeeSignUpWithConstructor.changeCompanyName("NextGen Systems");
empSignUp.printDetails();
