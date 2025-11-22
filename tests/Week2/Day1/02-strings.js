/* String Declaration
1. String Literal
2. Object Literal*/

// String Literal
let companyName = "Test Leaf";
let firmName = "Test Leaf";

console.log(companyName === firmName); //true

//Object Literal
let companyNameNew = new String("Test Leaf");
let firmNameNew = new String("Test Leaf");

console.log(companyNameNew === firmNameNew); //false

//String methods :
//Escape sequence: \,\n,\t
let testEscape = 'It\'s a regression testing';
console.log(testEscape);

let testEsc = "Hello this is \"double quote\"";
console.log(testEsc);

//concatenation: //+
let testCase = "Create a new lead";
let testCaseId = "123";

let resultConcat = testCaseId.concat(testCase);
console.log(resultConcat);

let testCase1 = "Create a new lead";
let testCaseIdAsNumber = 123;

let resultConcat1 = testCaseIdAsNumber.toString().concat(testCase);
console.log(resultConcat1);

let resultPlus = testCaseId + "-" + testCase1 + " passed the execution";
console.log(resultPlus);

//Template literal --> '${}'
function funName(Tcases) {
    let output = `There are ${Tcases} test cases`;
    console.log(output);
}
funName(120);

//length - property

let course = "Playwright";
console.log(`The length of the string is ${course.length}`); // length start from 0 for "playwright" string
console.log("The length of the string is " + course.length);

//charAt()
console.log(`The charAT of 2 in the string is ${course.charAt(2)}`);

//indexOf()
console.log(`The index of "a" is ${course.indexOf('a')}`); // index start from 0 for "playwright" string

//slice()
let outputSlice1 = course.slice(2, 4); // index start from 0 for "playwright" string
console.log(outputSlice1);//ay

let outputSlice2 = course.slice(-4, -2); // negative index start from -10 for "playwright" string
console.log(outputSlice2);//ig

let outputSlice3 = course.slice(5); // negative index start from -10 for "playwright" string
console.log(outputSlice3);//right

//substring

let outputSubstring1 = course.substring(2,4);
console.log(outputSubstring1);

let outputSubstring2 = course.substring(4,2);
console.log(outputSubstring2);

//let outputSubstring2 = course.substring(-4,-2); Negative range is not allowed in substring

let outputSubstring3 = course.substring(-5);
console.log(outputSubstring3);//playwright