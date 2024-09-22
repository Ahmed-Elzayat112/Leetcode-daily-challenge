"use strict";
/**
 * Compares two numbers and determines which one should come first
 * when forming the largest number possible.
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} A negative number if a comes first, a positive number if b comes first,
 *                   or 0 if they are equal
 */
function compareFn(a, b) {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;
    // We use the localeCompare() method to compare the strings
    // and return the result multiplied by -1 because the localeCompare()
    // method returns a positive number if the first string is greater than the
    // second one, and a negative number if the first string is less than the
    // second one. We want the opposite.
    return ab.localeCompare(ba) * -1;
}
/**
 * Given an array of numbers, returns the largest number that can be formed
 * using those numbers.
 *
 * @param {number[]} nums - The array of numbers
 * @returns {string} The largest number that can be formed using the numbers
 */
function largestNumber(nums) {
    let sorted = nums.sort(compareFn);
    // Replace any leading zeros with an empty string
    // If the result is an empty string, return 0
    return sorted.join("").replace(/^0+/g, "") || "0";
}
console.log(largestNumber([3, 43, 48, 94, 85, 33, 64, 32, 63, 66]));
