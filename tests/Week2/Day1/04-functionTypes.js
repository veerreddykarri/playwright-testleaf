//Named Function:

function add(a, b) {
    let c = a + b;
    return c;
}

console.log(10,20); // function call with arguments

//Function Expression / Anonymous
let funName = function () {
    console.log("This is a function expression");
}

funName();

//Arrow Function
let funName1 = () => {
    console.log("This is a arrow function");
}
funName1();

//Sinle Line arrow function
const funName3 = (x,y) => x+y;
console.log(funName3(10,30));