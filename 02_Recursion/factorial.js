/**
 * @title Factorial Function
 * @dev This function calculates the factorial of a given non-negative integer.
 * @param num The non-negative integer for which the factorial is to be calculated.
 * @return The factorial of the given number. Returns 1 if the input number is 0 or 1.
 * @notice The function expects a non-negative integer as input. Input validation is not performed.
 * @example
 *   console.log(factorial(3)); // Output: 6
 *   console.log(factorial(4)); // Output: 24
 */

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
