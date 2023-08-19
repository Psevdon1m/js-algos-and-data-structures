// exec time: 1s on avarage O(n
/**
 * @title AddUpTo Function
 * @dev This function calculates the sum of all integers from 1 to a given positive integer 'n'.
 * @param n The positive integer up to which the sum is calculated.
 * @return total The sum of integers from 1 to 'n'.
 */
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

/*=========================================================*/

/**
 * @title Sum of Natural Numbers
 * @dev This function calculates the sum of natural numbers up to a given positive integer 'n'.
 * @notice The value of 'n' should be a non-negative integer.
 * @param n The positive integer up to which the sum of natural numbers needs to be calculated.
 * @return sum The sum of natural numbers up to 'n'.
 * @example
 *  addUpTo(5); // Returns 15 (1 + 2 + 3 + 4 + 5 = 15)
 *  addUpTo(10); // Returns 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)
 *  addUpTo(0); // Returns 0 (There are no natural numbers to add)
 *  addUpTo(1); // Returns 1 (Only one natural number, which is 1)
 */
//  execution time 0.000023s on avarate O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds.`);
