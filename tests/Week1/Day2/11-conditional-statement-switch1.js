function runTests(testType) {
    switch (testType) {
        case "Smoke":
            console.log("Running Smoke Test");
            break;

        case "Sanity":
            console.log("Running Sanity Test");
            break;

        case "Regression":
            console.log("Running Regression Test");
            break;

        default:
            console.log("Unknown Test Type : Running Smoke Test by Default");
            break;
    }
}

let testType = "Smoke";
runTests(testType);