//Using Angular Brackets
let response : any = "Record created Successfully";
let myResponse = <string>response;
console.log(myResponse.length);
console.log(typeof myResponse);

//Using keyword as
let sCode : any = "Success";
let statusLength = sCode as string;
console.log(statusLength.length);
