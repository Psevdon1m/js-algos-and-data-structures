function linearSearchSimple(arr, value) {
  if (!arr.length) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().toLowerCase() === value.toString().toLowerCase()) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchSimple([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
