//compound assignment operator

let x = 10
x += 5
console.log(x); //15

x -= 5 //(x=x-5) (15-5)
console.log(x); //10

x *= 5
console.log(x); //50

//post increment --> value++ => value+1
console.log(x++); //50
console.log(x); //51

//pre increment --> ++value => value+1
console.log(++x); //52
console.log(x); //52

//post decrement --> value-- => value-1
console.log(x--); //52
console.log(x); //51

//pre decrement --> --value => value-1
console.log(--x); //50
console.log(x); //50

/* 
Strict equality "==="
compare the value and datatype
*/

/* 
loose equality "=="
compare the value and but not datatype
*/


console.log(1 === 1); //true
console.log(1 === "1"); //false
console.log(1 == "1"); //true (loose equality)
console.log(1 == true); //true internally means 1, true =1 and false = 0 (loose equality)
console.log(1 === true); //false 