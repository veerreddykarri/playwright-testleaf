/*Create a JavaScript program that defines a function to compute the intersection of two arrays. The
intersection should include elements that appear in both arrays without any duplicates. */

function intersection(arr1, arr2) {
  let result = [];

  // Loop through every item in the first array
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];   // current value from arr1

    // Check every item in the second array
    for (let j = 0; j < arr2.length; j++) {

      // If the value from arr1 matches a value in arr2
      if (value === arr2[j]) {

        // Before adding, we must check if this value is already in result.
        // This prevents duplicates.
        let alreadyAdded = false;

        // Loop through the result array to check for duplicates
        for (let k = 0; k < result.length; k++) {
          if (result[k] === value) {
            alreadyAdded = true;   // mark that the value already exists
          }
        }

        // If the value was not already added to result,
        // then we push it into result.
        if (!alreadyAdded) {
          result.push(value);
        }
      }
    }
  }

  // After checking all values, return the final intersection list
  return result;
}

console.log(intersection([1, 2, 3], [3, 4, 5]));        // [3]  (typical case)
console.log(intersection([1, 2, 3], [4, 5, 6]));        // []   (no common elements)
console.log(intersection([1, 1, 2], [1, 2, 2]));        // [1, 2] (no duplicates)
console.log(intersection([], [1, 2, 3]));               // []
console.log(intersection([10, 20, 30], [10, 20, 30]));  // [10, 20, 30] (all common)
