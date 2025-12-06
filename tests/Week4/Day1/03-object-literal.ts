
/*
let user = {
    firstName : "Veer", //key : value
    lastName : "K",
    email : "veer@veer.com"
}
console.log(user.firstName); //accessing values inside an object using dot notation
*/

let user : {
    "first-Name": string, //key : value
    lastName: string,
    email: string
} = {
    "first-Name": "Veer", //key : value
    lastName: "K",
    email: "veer@veer.com"
}
console.log(user["first-Name"]);
console.log(user.email);