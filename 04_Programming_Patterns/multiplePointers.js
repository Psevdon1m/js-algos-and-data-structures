/**
 * @title SumZero
 * @dev Finds a pair of elements in the given array whose sum equals zero.
 * @param arr An array of integers in ascending order.
 * @return A tuple containing two integers that add up to zero, if found.
 *         Otherwise, an empty array if no such pair exists.
 *
 * @notice The input array must be sorted in ascending order for this function to work correctly.
 *         The function uses a two-pointer approach to find the pair of elements that sum up to zero.
 *
 * @example
 *  sumZero([1, 2, 3, -3, -2, -1]); // Output: [-3, 3]
 *  sumZero([-5, -4, -3, -2, -1, 0]); // Output: [-2, 2]
 *  sumZero([-2, 0, 1, 3]); // Output: []
 *
 * @dev This function has a time complexity of O(n), where n is the number of elements in the array.
 */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else if (arr[left] + arr[right] < 0) {
      left++;
    }
  }
}

/**
 * @title Count Unique Values with Extra Variables
 * @dev This function takes an array of integers as input and counts the number of unique values
 *      in the array while considering the extra variables to maintain the count of unique values.
 * @param arr An array of integers in non-descending order.
 * @return uniqueCount The count of unique values in the input array.
 * @example
 *   countUniqueValues([1, 2, 2, 3, 4, 4, 4, 5]); // Returns 5 (unique values: 1, 2, 3, 4, 5)
 *   countUniqueValues(['apple', 'banana', 'banana', 'orange']); // Returns 3 (unique values: 'apple', 'banana', 'orange')
 *   countUniqueValues([]); // Returns 0 (no unique values in an empty array)
 */

function countUniqueValuesWithExtraVars(arr) {
  let uniqueCount = 0;
  let currentUnique = null;
  if (!arr.length) {
    return 0;
  }
  for (let int of arr) {
    if (currentUnique === null) {
      uniqueCount = 1;
      currentUnique = int;
    } else if (currentUnique !== null && currentUnique < int) {
      uniqueCount++;
      currentUnique = int;
    }
  }
  return uniqueCount;
}

/**
 * @title Count Unique Values in an Array
 * @dev This function takes an array as input and returns the number of unique values it contains.
 * @notice The array should be sorted in ascending order, or the function may not work as expected.
 * @param arr An array of comparable elements (e.g., numbers, strings) in ascending order.
 * @return count The number of unique values present in the input array.
 *
 * @example
 *   countUniqueValues([1, 2, 2, 3, 4, 4, 4, 5]); // Returns 5 (unique values: 1, 2, 3, 4, 5)
 *   countUniqueValues(['apple', 'banana', 'banana', 'orange']); // Returns 3 (unique values: 'apple', 'banana', 'orange')
 *   countUniqueValues([]); // Returns 0 (no unique values in an empty array)
 */

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }
  return (i += 1);
}
