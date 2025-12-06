var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local";
    Environment["DEVELOPMENT"] = "Development";
    Environment["STAGING"] = "Staging";
    Environment["PRODUCTION"] = "Production";
})(Environment || (Environment = {}));
function runTests(selectEnviornment) {
    console.log("The selected enviornment is: ".concat(selectEnviornment));
}
runTests(Environment.DEVELOPMENT);
runTests(Environment.LOCAL);
