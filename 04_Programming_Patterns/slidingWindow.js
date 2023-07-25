/**
 * @title Maximum Subarray Sum
 * @dev This function calculates the maximum sum of a subarray of a given array.
 *      The subarray has a specified length.
 * @param arr {Array} An array of integers.
 * @param num {number} The length of the subarray for which the maximum sum is to be calculated.
 * @return {number|null} The maximum sum of the subarray. Returns null if the array is empty.
 *
 * @example
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // Returns 10, as the maximum sum is 10 (subarray: [8, 2])
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // Returns 17, as the maximum sum is 17 (subarray: [2, 5, 2, 8])
 * maxSubarraySum([4, 2, 1, 6], 1);        // Returns 6, as the maximum sum is 6 (subarray: [6])
 * maxSubarraySum([4, 2, 1, 6, 2], 4);     // Returns 13, as the maximum sum is 13 (subarray: [2, 1, 6, 4])
 * maxSubarraySum([], 4);                  // Returns null, as the array is empty.
 */

function maxSubarraySum(arr, num) {
  if (!arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
