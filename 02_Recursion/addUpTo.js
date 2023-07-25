/**
 * @title Recursive function to calculate the sum of natural numbers up to a given value.
 * @description This function takes a positive integer "num" as input and returns the sum of all the natural numbers from 1 up to "num". It uses recursion to calculate the sum.
 * @param {number} num - The positive integer up to which the sum is calculated.
 * @returns {number} - The sum of natural numbers up to "num".
 * @example
 * // Example usage:
 * console.log(addUpTo(4)); // Output: 10
 * console.log(addUpTo(5)); // Output: 15
 * console.log(addUpTo(10)); // Output: 55
 * console.log(addUpTo(0)); // Output: 0
 * console.log(addUpTo(1)); // Output: 1
 */

function addUpTo(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num + addUpTo(num - 1);
}

console.log(addUpTo(4)); // 10
console.log(addUpTo(5)); // 15
console.log(addUpTo(10)); // 55
console.log(addUpTo(0)); // 0
console.log(addUpTo(1)); // 1
