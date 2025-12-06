"use strict";
//Type  has two types
//Union Type
//Intersection Type
Object.defineProperty(exports, "__esModule", { value: true });
var userName;
userName = "veer@veer.com";
userName = 123456;
//here the productDataType is an alias name to handle 3 different datatypes
var accountNumber = 12345;
accountNumber = "veer@veer.com";
accountNumber = false;
function invokeBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome");
    }
    else {
        console.log("Firefox Browser");
    }
}
invokeBrowser("Firefox");
