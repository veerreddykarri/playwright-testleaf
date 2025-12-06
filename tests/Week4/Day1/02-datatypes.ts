/*
1. number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
9. tuple
*/

// 1. number
let age: number = 30;
let price: number = 199.99;

// 2. string
let companyName: string = "Veer";
let city: string = "London";

// 3. boolean
let isActive: boolean = true;
let isLoggedIn: boolean = false;

// 4. undefined
let u: undefined = undefined;

// 5. null
let n: null = null;

// 6. any (avoid using in real projects)
let data: any = "hello";
data = 100;
data = true;

// 7. unknown (safer version of any)
let value: unknown = "Test";
// Need type checking before using
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

// 8. never (for functions that never return)
function throwError(msg: string): never {
    throw new Error(msg);
}
// function infiniteLoop(): never {
//     while (true) {}
// }

// 9. tuple (fixed order & types)
let person: [string, number, boolean] = ["Veer", 40, true];

// Example usage:
console.log(companyName);
console.log(person);
