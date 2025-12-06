
//Type  has two types
//Union Type
//Intersection Type

import { log } from "console";

let userName: string | number;

userName = "veer@veer.com";
userName = 123456;

//Aliaz name for data types

type productDataType = number | string | boolean
//here the productDataType is an alias name to handle 3 different datatypes

let accountNumber: productDataType = 12345;
accountNumber = "veer@veer.com";
accountNumber = false;

//aliaz name for values
type supportedBrowser = "Chrome" | "Firefox" | "msedge";

function invokeBrowser(browserName: supportedBrowser) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome");
    } else {
        console.log("Firefox Browser");
    }
}
invokeBrowser("Firefox");

//intersection type - & -We have to mandatorily use all the values

type Admin = {
    adminName : string,
    privileges : string[]
}

type Employee = {
    name : string,
    empID : number,
    date : string
}

type QA = Admin & Employee

const userProfile: QA = {
    adminName: "Veer",
    privileges: ["All", "Materials"],
    name: "Veer Karri",
    empID: 12345,
    date: "2025-01-01"
}

console.log(userProfile.adminName);
console.log(userProfile.privileges);