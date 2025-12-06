var num = 40; //implicit inference
var num1 = 50; //explicit inference
// 1. Standard Function
function AddNumber1(a, b) {
    var c = a + b;
    return c;
}
// 2. Shortened regular function
function AddNumber2(a, b) {
    return a + b;
}
// 3. Arrow Function (block body)
var AddNumber3 = function (a, b) {
    return a + b;
};
// 4. Arrow Function (one-liner)
var AddNumber4 = function (a, b) { return a + b; };
// 5. Anonymous Function Expression
var AddNumber5 = function (a, b) {
    return a + b;
};
// 6. With default parameters
var AddNumber6 = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
};
// 7. Class Method
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    Calculator1.prototype.addNumber = function (a, b) {
        return a + b;
    };
    return Calculator1;
}());
var calc1 = new Calculator1();
// 8. Static Class Method
var Calculator2 = /** @class */ (function () {
    function Calculator2() {
    }
    Calculator2.addNumber = function (a, b) {
        return a + b;
    };
    return Calculator2;
}());
// 9. Namespace
var MathOps;
(function (MathOps) {
    function addNumber(a, b) {
        return a + b;
    }
    MathOps.addNumber = addNumber;
})(MathOps || (MathOps = {}));
var AddNumber7 = function (a, b) { return a + b; };
var AddNumber8 = function (a, b) { return a + b; };
// 12. Rest Parameters (adds ANY amount of numbers)
var AddNumbers9 = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (sum, n) { return sum + n; }, 0);
};
// 13. IIFE
(function (a, b) {
    console.log("IIFE Sum:", a + b);
})(10, 20);
function addNumber10(a, b) {
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
