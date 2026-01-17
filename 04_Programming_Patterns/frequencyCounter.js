/**
 * @title Check if Two Arrays have Same Elements Squared
 * @dev This function takes two arrays and checks if they contain the same elements squared, irrespective of their order.
 * @param arr1 The first input array of integers.
 * @param arr2 The second input array of integers.
 * @return Whether the two arrays have the same elements squared.
 * @notice The input arrays should only contain positive integers.
 * @notice The function has a time complexity of O(n^2), where n is the length of the input arrays, due to the use of indexOf inside a loop.
 */

// function same(arr1, arr2) {
//   // complexity in time O(n^2) as we have 2 loops
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
// }

/**
 * @title Check if Two Arrays have the Same Frequency of Squared Elements
 * @notice This function determines whether two arrays have the same frequency of squared elements.
 * @dev The function calculates the frequency of elements in each array, squares the elements of the first array,
 *      and checks if the squared elements' frequencies in both arrays match.
 * @param {number[]} arr1 - The first input array of integers.
 * @param {number[]} arr2 - The second input array of integers.
 * @return {boolean} Returns true if both arrays have the same frequency of squared elements, otherwise false.
 * @example
 *      let result = same([1, 2, 3], [4, 1, 9]);
 *      console.log(result); // Output: true (Both arrays have the same frequency of squared elements)
 *
 *      let result2 = same([1, 2, 3], [1, 9]);
 *      console.log(result2); // Output: false (The second array doesn't have the same frequency of squared elements)
 */

function same(arr1, arr2) {
  //has better time complexity O(n) as we dont have nested loops while we have a few loops instead
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let int of arr1) {
    frequencyCounter1[int] = (frequencyCounter1[int] || 0) + 1;
  }
  for (let int of arr2) {
    frequencyCounter2[int] = (frequencyCounter2[int] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [1, 9, 4]));

function same2(arr1, arr2) {
  let sqrObj = {};
  let isSame = true;
  if (arr1.length !== arr2.length) return false;
  for (let n of arr1) {
    sqrObj[n ** 2] = true;
  }

  for (let n of arr2) {
    if (!sqrObj[n]) {
      isSame = false;
    }
  }

  return isSame;
}

console.log(same2([1, 2, 3], [1, 9, 4]));
console.log(same2([1, 2, 3], [1, 9]));
console.log(same2([1, 2, 3, 3, 3, 3, 2, 3, 5], [1, 9, 4, 9, 4, 9, 9, 9, 22]));
