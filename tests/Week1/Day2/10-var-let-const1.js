const browserVersion = "Chrome";

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "Chrome 130";
        console.log("Inside function block and  inside 'if' block", browserVersion);

    }
    console.log("Inside function block and outside 'if' block", browserVersion);
}

getBrowserVersion();
console.log("Outside the function Block", browserVersion);