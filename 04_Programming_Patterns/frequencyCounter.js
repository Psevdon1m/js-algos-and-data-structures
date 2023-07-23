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

console.log(same([1, 2, 3], [1, 9, 4]));
