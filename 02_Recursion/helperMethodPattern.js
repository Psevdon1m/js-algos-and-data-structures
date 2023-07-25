/**
 * @title Collect Odd Values
 * @notice This function takes an array of integers as input and returns a new array containing only the odd integers.
 * @dev The function uses a recursive helper function to traverse the input array and collect odd values.
 * @param arr The input array of integers from which odd values will be collected.
 * @return result An array containing only the odd integers from the input array.
 * @example
 *   Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *   Output: [1, 3, 5, 7, 9]
 *   Explanation: The function collects all odd integers from the input array and returns them in a new array.
 */

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (!helperInput.length) return;
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }

/**
 * ALTERNATIVE WAY USING PURE RECURSION
 * @title Collect Odd Values
 * @dev This function takes an array of integers as input and recursively collects
 *      all the odd values from the array into a new array.
 * @param arr {number[]} - The input array of integers.
 * @return {number[]} - An array containing all the odd values from the input array.
 *
 * @notice The function uses recursion to traverse the input array and collects
 *         odd values into a new array called "result".
 *         If the input array is empty, the function returns an empty array.
 *         If the first element of the input array is odd, it is added to the "result" array.
 *         The function then calls itself recursively with the rest of the array (arr.slice(1)),
 *         and the result is concatenated with the "result" array to accumulate the final
 *         array of odd values.
 *
 * @example
 * // returns [1, 3, 5, 7, 9]
 * collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */

function collectOddValues(arr) {
  let result = [];
  if (!arr.length) return result;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  return result.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
