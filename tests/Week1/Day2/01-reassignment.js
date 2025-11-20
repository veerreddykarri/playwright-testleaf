//Characteristics / behaviour of var, let and const

//var redeclaration

var userName = "hello@testleaf" //declaration
var userName = "helloteam@testleaf" //redeclaration (Not allowed in Java but allowed in JS why it's not recommended)
console.log(userName)

var password = "veer123" //declaration and assigning a value
password = "jiya123"
console.log(password)


//let declaration
//let accountBalance = 123465
//let accountBalance = 23456 redeclaration is not allowed

let accountBalance = 12345
accountBalance = 3 // Can be reassigned

//const declaration

const balance = 12345
//const balance = 123456 redeclaration not allowed
//balance = 1234 reassignment not allowed will throw error