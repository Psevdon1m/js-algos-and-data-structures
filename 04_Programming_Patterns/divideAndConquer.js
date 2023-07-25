/**
 * @title Binary Search
 * @dev A function to perform a binary search on a sorted array and find the index of a given value.
 * @param array The input sorted array where the search will be performed.
 * @param value The value to be searched for within the array.
 * @return The index of the `value` in the `array`, if found, otherwise -1.
 *
 * @notice This function assumes that the input `array` is sorted in ascending order.
 * @notice The `array` should be a non-empty array with unique elements for correct results.
 *
 * @example
 * // Returns 7
 * binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8);
 */

function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let cur = array[middle];
    if (cur < value) {
      min = middle + 1;
    } else if (cur > value) {
      max = middle - 1;
    } else {
      return middle;
    }
    console.log({ curValue: cur, minIndex: min, maxIndex: max });
  }
  return -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    8
  )
); // 7
