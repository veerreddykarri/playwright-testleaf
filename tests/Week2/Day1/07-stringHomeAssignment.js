/*Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

function lengthOfLastWord(s) {
    const words = s.split(" ");// Split "Hello World" to ["Hello", "World"]
    const filtered = words.filter(word => word.length > 0); // ["Hello", "World"] - Remove empty strings (caused by extra spaces)
    const lastWord = filtered[filtered.length - 1];    // lastWord = "World"
    return lastWord.length; //5
}
console.log(lengthOfLastWord("Hello World"));

/* Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4. */

function lengthOfLastWordTrim(s) {
    s = s.trim(); // "fly me to the moon"
    const words = s.split(" "); // ["fly", "me", "to", "the", "moon"]
    const lastWord = words[words.length - 1];    // lastWord = "moon"
    return lastWord.length;    // 4
}
console.log(lengthOfLastWordTrim(" fly me to the moon "));

/* Example 3: 
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world') 
Output: false */

function isAnagram(s1, s2) {
    const clean1 = s1.replace(/\s+/g, "").toLowerCase();     // "listen" to "listen" (Remove spaces and convert to lowercase)
    const clean2 = s2.replace(/\s+/g, "").toLowerCase();    // "silent" to "silent"
    const sorted1 = clean1.split("").sort().join(""); //"listen" to "eilnst" (Split, sort, and join the letters)
    const sorted2 = clean2.split("").sort().join(""); // "silent" to "eilnst"
    const result = sorted1 === sorted2; //true
    return result; // true
}
console.log(isAnagram("listen", "silent"));     //true
console.log(isAnagram("hello", "world"));       //false
console.log(isAnagram("School Master", "The Classroom")); //true