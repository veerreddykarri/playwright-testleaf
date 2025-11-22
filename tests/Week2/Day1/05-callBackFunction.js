
//Basic Syntax
function mainFunction(callback) {
  console.log("Main function is running...");
  callback(); // Call the callback function
}

function callbackFunction() {
  console.log("Callback function executed.");
}

mainFunction(callbackFunction);

//Call Back function with Parameters
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function done() {
  console.log("Greeting completed.");
}

greet("Alice", done);

//Callback Functions Handling Asynchronous Code
function delayedMessage(callback) {
  setTimeout(() => {
    console.log("This message appears after 2 seconds.");
    callback();
  }, 2000);
}

function done() {
  console.log("Callback executed after delay.");
}

delayedMessage(done);


//Example 1
let isAvailable = true;   // or false

function checkTicketAvalability(phoneNoCallBack) {
    console.log("Checking ticket availability..");

    setTimeout(() => {

        if (isAvailable) {
            console.log("Tickets are available");
        } else {
            console.log("Tickets are NOT available");
        }

        phoneNoCallBack();
    }, 2000);
}

function youGetCall() {
    console.log("Your Tickets are ready");
}

checkTicketAvalability(youGetCall);

//Example 2
function add(a, b, callback) {
    let sum = a + b;
    callback(sum);     // pass result to callback
}

function printResult(result) {
    console.log("Result:", result);
}

add(5, 10, printResult);
