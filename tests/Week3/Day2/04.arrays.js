/* ============================
   Arrays in JavaScript
   - Dynamic Size
   - Heterogeneous
============================ */

console.log("===== BASIC ADD/REMOVE =====");

/* 1. push() ---> add element at END */
let letters = ["a", "b", "c"];
letters.push("d");
console.log("push:", letters);

/* 2. pop() ---> remove LAST element */
letters.pop();
console.log("pop:", letters);

/* 3. shift() ---> remove FIRST element */
letters.shift();
console.log("shift:", letters);

/* 4. unshift() ---> add element to FRONT */
letters.unshift("a");
console.log("unshift:", letters);


console.log("\n===== SPLICE / SLICE =====");

/* 5. splice() ---> add/remove at any index */
let nums = [1, 2, 3, 4];
nums.splice(1, 1); // remove 1 element at index 1
console.log("splice remove:", nums);

nums.splice(1, 0, 10, 20); // add at index 1
console.log("splice add:", nums);

/* 6. slice() ---> copy part of array (non-mutating) */
let arr = ["x", "y", "z"];
let sliced = arr.slice(0, 2);
console.log("slice:", sliced);
console.log("original after slice:", arr);


console.log("\n===== CONCAT / JOIN =====");

/* 7. concat() ---> merge arrays */
let a1 = [1, 2];
let a2 = [3, 4];
console.log("concat:", a1.concat(a2));

/* 8. join() ---> convert array to string */
let letters2 = ["a", "b", "c"];
console.log("join:", letters2.join("-"));


console.log("\n===== SEARCHING =====");

/* 9. indexOf() ---> find index */
let names = ["Ram", "Veer", "Arjun"];
console.log("indexOf Veer:", names.indexOf("Veer"));

/* 10. includes() ---> true/false */
console.log("includes Arjun:", names.includes("Arjun"));


/* 11. find() ---> return first matching element */
let scores = [5, 10, 15, 20];
let found = scores.find(s => s > 10);
console.log("find >10:", found);

/* 12. findIndex() ---> return index of first match */
console.log("findIndex >10:", scores.findIndex(s => s > 10));


console.log("\n===== TRANSFORMING =====");

/* 13. map() ---> transform values */
let numbers = [1, 2, 3];
let double = numbers.map(n => n * 2);
console.log("map doubled:", double);

/* 14. filter() ---> keep only matching */
let ages = [10, 20, 30, 40];
let adults = ages.filter(a => a >= 18);
console.log("filter adults:", adults);

/* 15. reduce() ---> reduce to single value */
let total = ages.reduce((sum, value) => sum + value, 0);
console.log("reduce sum:", total);


console.log("\n===== LOOPING =====");

/* 16. forEach() ---> loop through values */
letters2.forEach(l => console.log("forEach:", l));


console.log("\n===== SORT & REVERSE =====");

/* 17. reverse() ---> reverse array */
let r = [1, 2, 3];
r.reverse();
console.log("reverse:", r);

/* 18. sort() ---> alphabetical by default */
let s = [10, 2, 50, 1];
s.sort();
console.log("sort default:", s);

/* numeric sort */
s.sort((a, b) => a - b);
console.log("sort numeric:", s);


console.log("\n===== ADVANCED =====");

/* 19. flat() ---> flatten nested arrays */
let multi = [1, [2, 3], [4, [5]]];
console.log("flat:", multi.flat(2));

/* 20. toReversed() ---> non-mutating reverse */
let tr = [9, 8, 7];
console.log("toReversed:", tr.toReversed());
console.log("original:", tr);

/* 21. toSorted() ---> non-mutating sort */
console.log("toSorted:", tr.toSorted());

/* 22. toSpliced() ---> non-mutating splice */
console.log("toSpliced:", tr.toSpliced(1, 1));
console.log("original:", tr);

/* 23. with() ---> replace item immutably */
console.log("with():", tr.with(1, 100));

/* 24. entries(), keys(), values() */
let fruits = ["apple", "banana", "orange"];

console.log("keys:");
for (let key of fruits.keys()) console.log(key);

console.log("values:");
for (let value of fruits.values()) console.log(value);

console.log("entries:");
for (let [index, value] of fruits.entries()) console.log(index, value);

console.log("\n===== END =====");
