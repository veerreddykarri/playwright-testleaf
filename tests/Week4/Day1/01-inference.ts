
let num = 40; //implicit inference

let num1 : number = 50 //explicit inference

// 1. Standard Function
function AddNumber1(a: number, b: number): number {
    let c = a + b;
    return c;
}

// 2. Shortened regular function
function AddNumber2(a: number, b: number): number {
    return a + b;
}

// 3. Arrow Function (block body)
const AddNumber3 = (a: number, b: number): number => {
    return a + b;
};

// 4. Arrow Function (one-liner)
const AddNumber4 = (a: number, b: number): number => a + b;

// 5. Anonymous Function Expression
const AddNumber5 = function(a: number, b: number): number {
    return a + b;
};

// 6. With default parameters
const AddNumber6 = (a: number = 0, b: number = 0): number => a + b;

// 7. Class Method
class Calculator1 {
    addNumber(a: number, b: number): number {
        return a + b;
    }
}
const calc1 = new Calculator1();

// 8. Static Class Method
class Calculator2 {
    static addNumber(a: number, b: number): number {
        return a + b;
    }
}

// 9. Namespace
namespace MathOps {
    export function addNumber(a: number, b: number): number {
        return a + b;
    }
}

// 10. Function Type Alias
type AddFn1 = (a: number, b: number) => number;
const AddNumber7: AddFn1 = (a, b) => a + b;

// 11. Interface Function Type
interface AddFn2 {
    (a: number, b: number): number;
}
const AddNumber8: AddFn2 = (a, b) => a + b;

// 12. Rest Parameters (adds ANY amount of numbers)
const AddNumbers9 = (...nums: number[]): number =>
    nums.reduce((sum, n) => sum + n, 0);

// 13. IIFE
(function(a: number, b: number) {
    console.log("IIFE Sum:", a + b);
})(10, 20);

// 14. Function Overloading
function addNumber10(a: number, b: number): number;
function addNumber10(a: string, b: string): string;
function addNumber10(a: any, b: any): any {
    return a + b;
}

// Test calls
console.log(AddNumber1(10, 20));
console.log(AddNumber2(10, 20));
console.log(AddNumber3(10, 20));
console.log(AddNumber4(10, 20));
console.log(AddNumber5(10, 20));
console.log(AddNumber6(10, 20));
console.log(calc1.addNumber(10, 20));
console.log(Calculator2.addNumber(10, 20));
console.log(MathOps.addNumber(10, 20));
console.log(AddNumber7(10, 20));
console.log(AddNumber8(10, 20));
console.log(AddNumbers9(10, 20));
console.log(addNumber10(10, 20));


