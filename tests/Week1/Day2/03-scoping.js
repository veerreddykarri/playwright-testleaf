//Scoping in JS

//var scoping in block

//var companyName = "Test Leaf"  // global declaration

// if (true){
//     var companyName = "Test Leaf"
//     console.log("Accessing the var inside the if block",companyName)
// }

// console.log("Accessing the var outside the if block",companyName)


//let scoping in block
// if (true){
//     let companyName = "Test Leaf"
//     console.log("Accessing the let inside the if block",companyName)
// }

// console.log("Accessing the let outside the if block",companyName)

//const scoping in block
//  if (true){
//      const companyName = "Test Leaf"
//      console.log("Accessing the const inside the if block",companyName)
//  }

//  console.log("Accessing the const outside the if block",companyName)

function greet() {
    var message = "Hello Team"
    console.log("Accessing var inside the function block", message)
    if (true) {
        console.log("Accessing var inside the if block", message)
    }
}
greet()
console.log(message)