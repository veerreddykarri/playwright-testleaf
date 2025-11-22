/*Task 1: Function Declaration 
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
<name>!" to the console.*/

function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Veer");

/* Task 2: Arrow Function 
Create an arrow function named `double` that takes a number as a parameter and returns 
double its value.*/

const double = (num) => num * 2;
console.log(double(5)); // 10

/*Task 3: Anonymous Function 
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
after 2 seconds. */

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

/*Task 4: Callback Function 
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with 
that should print “Call Back Function” after 3 seconds. 
Call the `getUserData` function and log message using the callback function.  */

function getUserData(callback) {
    setTimeout(() => {
        callback("Call Back Function");
    }, 3000);
}

getUserData((message) => {
    console.log(message);
});