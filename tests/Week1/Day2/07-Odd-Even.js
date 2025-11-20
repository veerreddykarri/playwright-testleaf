
function isOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    }else{
        return "Odd";
    }
}

const result1 = isOddEven(10);
console.log(result1);

const result2 = isOddEven(3);
console.log(result2);