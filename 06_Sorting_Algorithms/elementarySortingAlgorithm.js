/**
 * @title Bubble Sort Algorithm
 * @description This JavaScript file contains two functions: swap and bubbleSort.
 *
 * The swap function takes an array 'arr' and two indices 'idx1' and 'idx2' as input, and swaps the elements at those indices in the array.
 *
 * @param {Array} arr - The array in which the elements will be swapped.
 * @param {number} idx1 - The index of the first element to swap.
 * @param {number} idx2 - The index of the second element to swap.
 * @returns {Array} The input array 'arr' with the elements at 'idx1' and 'idx2' swapped.
 *
 * @example
 * // Swap elements at index 1 and 3 in the array [10, 20, 30, 40]
 * const result = swap([10, 20, 30, 40], 1, 3);
 * console.log(result); // Output: [10, 40, 30, 20]
 *
 * The bubbleSort function takes an array 'arr' as input and performs a sorting algorithm called Bubble Sort on it. Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order until the entire list is sorted.
 *
 * @param {Array} arr - The array to be sorted using Bubble Sort.
 * @returns {Array} The input array 'arr' sorted in ascending order.
 *
 * @example
 * // Sort the array [1, 5, 3, 7, 8, 2, 9] using Bubble Sort
 * const result = bubbleSort([1, 5, 3, 7, 8, 2, 9]);
 * console.log(result); // Output: [1, 2, 3, 5, 7, 8, 9]
 *
 * The bubbleSort function optimizes the algorithm by introducing a variable 'noSwap'. During each iteration, if no swaps are made, it means the array is already sorted, and the loop breaks early, resulting in a slight improvement in performance for partially or fully sorted arrays.
 */

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function bubleSort(arr) {
  let noSwap = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break; // slight improvement if array is sorted after first few iteration and there left nothing to sort, break the loop
  }
  return arr;
}

// console.log(bubleSort([1, 5, 3, 7, 8, 2, 9]));
/*=======================================================================================================================*/

/**
 * @title Selection Sort
 * @description This function implements the selection sort algorithm to sort an array of numbers in ascending order.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array in ascending order.
 *
 * @dev The function iterates through the input array and finds the minimum element in the unsorted part of the array.
 * It then swaps the minimum element with the first element of the unsorted part of the array.
 * The process is repeated until the entire array is sorted.
 * Time complexity: O(n^2) where n is the number of elements in the array.
 * Space complexity: O(1).
 *
 * @example
 * console.log(selectionSort([1, 3, 2, 5, 8, 7])); // Output: [1, 2, 3, 5, 7, 8]
 * console.log(selectionSort([5, 3, 4, 1, 2]));    // Output: [1, 2, 3, 4, 5]
 * console.log(selectionSort([27, 15, 8, ...]));   // Output: [1, 2, 3, ..., 30]
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) break;
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex && arr[i] > arr[minIndex]) swap(arr, i, minIndex);
  }
  return arr;
}

// console.log(selectionSort([1, 3, 2, 5, 8, 7]));
// console.log(selectionSort([5, 3, 4, 1, 2]));
// console.log(
//   selectionSort([
//     27, 15, 8, 30, 24, 11, 6, 16, 23, 7, 20, 18, 12, 28, 3, 9, 26, 19, 1, 21,
//     25, 22, 13, 10, 5, 2, 4, 14, 17, 29,
//   ])
// );
/*=======================================================================================================================*/

/**
 * Sorts an array using the Insertion Sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array in ascending order.
 *
 * @example
 * const unsortedArray = [5, 2, 9, 1, 5, 6];
 * const sortedArray = insertionSort(unsortedArray);
 * console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tempVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > tempVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tempVal;
  }
  return arr;
}

console.log(insertionSort([3, 16, 9, 1, 2, 99, 37]));
