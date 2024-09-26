"use strict";
function longestCommonPrefix(arr1, arr2) {
    // Create two maps to store the prefixes we've seen in the arrays
    let mp1 = new Map();
    let mp2 = new Map();
    // Iterate over the first array and store all its prefixes
    for (let i = 0; i < arr1.length; i++) {
        let currentNumber = arr1[i].toString();
        let currentString = "";
        for (let j = 0; j < currentNumber.length; j++) {
            currentString += currentNumber[j];
            mp1.set(currentString, 1);
        }
    }
    // Iterate over the second array and store all its prefixes
    for (let i = 0; i < arr2.length; i++) {
        let currentNumber = arr2[i].toString();
        let currentString = "";
        for (let j = 0; j < currentNumber.length; j++) {
            currentString += currentNumber[j];
            mp2.set(currentString, 1);
        }
    }
    // Initialize result to 0
    let result = 0;
    // Iterate over the first map and check if the second map has the same prefix
    // If it does, update the result with the maximum length
    for (let [key] of mp1) {
        if (mp2.has(key)) {
            result = Math.max(result, key.length);
        }
    }
    // Return the result
    return result;
}
console.log(longestCommonPrefix([12334, 2, 3], [12344, 123344, 4]));
