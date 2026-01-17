/**
 * Performs binary search on a sorted array to find the index of a given value. Inherites Divide and Conquer approach to complete the task.
 *
 * @param {Array} arr - The sorted array to search in.
 * @param {number} val - The value to find in the array.
 * @returns {number} - The index of the `val` in the array if found; otherwise, returns -1.
 *
 * @example
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)); // Output: 7
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)); // Output: 0
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)); // Output: 3
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6)); // Output: 5
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2)); // Output: 1
 * console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9)); // Output: -1
 */
function binarySearch(arr, val) {
  if (!arr.length) return -1;
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val && left < right) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let index = null;
  let mid = Math.round((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    let midVal = arr[mid];
    console.log({ start, midVal, end });

    if (midVal > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.round((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)); // 7
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9)); // -1
