// exec time: 1s on avarage O(n)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

/*=========================================================*/

//  execution time 0.000023s on avarate O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds.`);
