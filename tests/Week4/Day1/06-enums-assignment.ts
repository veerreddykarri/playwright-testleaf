
enum Environment {
    LOCAL = "Local",
    DEVELOPMENT = "Development",
    STAGING = "Staging",
    PRODUCTION = "Production"
}

function runTests(selectEnviornment:Environment):void {
    console.log(`The selected enviornment is: ${selectEnviornment}`);
    
}

runTests(Environment.DEVELOPMENT);
runTests(Environment.LOCAL);
