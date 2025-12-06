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
var age = 30;
var price = 199.99;
// 2. string
var companyName = "Veer";
var city = "London";
// 3. boolean
var isActive = true;
var isLoggedIn = false;
// 4. undefined
var u = undefined;
// 5. null
var n = null;
// 6. any (avoid using in real projects)
var data = "hello";
data = 100;
data = true;
// 7. unknown (safer version of any)
var value = "Test";
// Need type checking before using
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// 8. never (for functions that never return)
function throwError(msg) {
    throw new Error(msg);
}
// function infiniteLoop(): never {
//     while (true) {}
// }
// 9. tuple (fixed order & types)
var person = ["Veer", 40, true];
// Example usage:
console.log(companyName);
console.log(person);
