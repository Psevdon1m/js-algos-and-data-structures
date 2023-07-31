/**
 * Merge two sorted arrays into a single sorted array.
 *
 * Given two arrays, 'arr1' and 'arr2', where both are already sorted in ascending order,
 * this function merges them into a single sorted array in ascending order.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} result - The merged sorted array containing all elements from 'arr1' and 'arr2'.
 *
 * @example
 * const mergedArray = mergeSortedArrays([1, 20, 30], [3, 5, 25]);
 * console.log(mergedArray); // Output: [1, 3, 5, 20, 25, 30]
 */

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let arr1Startid = 0;
  let arr2Startid = 0;
  //[1,20,30], [3,5,25]
  while (arr1Startid < arr1.length && arr2Startid < arr2.length) {
    if (arr1[arr1Startid] < arr2[arr2Startid]) {
      result.push(arr1[arr1Startid]);
      arr1Startid++;
    } else {
      result.push(arr2[arr2Startid]);
      arr2Startid++;
    }
  }
  while (arr1Startid < arr1.length) {
    result.push(arr1[arr1Startid]);
    arr1Startid++;
  }
  while (arr2Startid < arr2.length) {
    result.push(arr2[arr2Startid]);
    arr2Startid++;
  }

  return result;
}

/*======================================================================================================*/
/**
 * Sorts an array using the merge sort algorithm.
 *
 * The merge sort algorithm divides the array into halves, recursively sorts each half,
 * and then merges the sorted halves to produce the final sorted array.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} sortedArray - The array sorted in ascending order.
 *
 * @example
 * const unsortedArray = [1, 50, 2, 4, 3, 16, 8, 6];
 * const sortedArray = mergeSort(unsortedArray);
 * console.log(sortedArray); // Output: [1, 2, 3, 4, 6, 8, 16, 50]
 */

function mergeSort(arr) {
  //arr = [1,50,2,4,3,16,8,6]
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let leftPart = mergeSort(arr.slice(0, middle)); // mergeSort(1,50,2,4) => left = 1,50 & right = 2,4 => mergeSort(1,50) => left = 1, rigth = 50 => mergeSortedArrays([1],[50]) => [1,50];
  let rightPart = mergeSort(arr.slice(middle)); // mergeSort(3,16,8,6) => left (...) = mergeSortedArrays([3],[16]) => [3,16]; right(...) = mergeSortedArrays([8],[6]) => [6,8]; mergeSortedArrays([3,16], [6,8]) => [3,6,8,16]
  return mergeSortedArrays(leftPart, rightPart); //[1,2,4,50], [3,6,8,16] => [1,2,3,4,6,8,16,50]
}
