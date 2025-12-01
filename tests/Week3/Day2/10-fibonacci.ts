export function printFibonacci(n: number) {
  // start with the first two Fibonacci numbers
  let a = 0;
  let b = 1;

  // put the first number into the line
  let line = a + " ";

  // if we need more numbers, add the second one
  if (n > 0) {
    line += b + " ";
  }

  // make the rest of the Fibonacci numbers
  for (let i = 2; i <= n; i++) {
    let c = a + b;   // next number
    line += c + " "; // add it to the line

    // move to the next pair
    a = b;
    b = c;
  }

  // print all numbers on one line
  console.log(line);
}

printFibonacci(10);
