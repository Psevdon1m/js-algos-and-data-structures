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

// function countUniqueValuesWithExtraVars(arr) {
//   let uniqueCount = 0;
//   let currentUnique = null;
//   if (!arr.length) {
//     return 0;
//   }
//   for (let int of arr) {
//     if (currentUnique === null) {
//       uniqueCount = 1;
//       currentUnique = int;
//     } else if (currentUnique !== null && currentUnique < int) {
//       uniqueCount++;
//       currentUnique = int;
//     }
//   }
//   return uniqueCount;
// }

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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
