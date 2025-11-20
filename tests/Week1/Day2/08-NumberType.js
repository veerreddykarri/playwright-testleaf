function getNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(getNumberType(5));
console.log(getNumberType(-5));
console.log(getNumberType(0));