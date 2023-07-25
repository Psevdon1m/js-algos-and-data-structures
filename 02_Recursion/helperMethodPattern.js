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

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (!helperInput.length) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
