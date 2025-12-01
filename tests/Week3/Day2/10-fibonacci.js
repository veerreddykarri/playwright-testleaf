"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFibonacci = printFibonacci;
function printFibonacci(n) {
    // start with the first two Fibonacci numbers
    var a = 0;
    var b = 1;
    // put the first number into the line
    var line = a + " ";
    // if we need more numbers, add the second one
    if (n > 0) {
        line += b + " ";
    }
    // make the rest of the Fibonacci numbers
    for (var i = 2; i <= n; i++) {
        var c = a + b; // next number
        line += c + " "; // add it to the line
        // move to the next pair
        a = b;
        b = c;
    }
    // print all numbers on one line
    console.log(line);
}
printFibonacci(10);
