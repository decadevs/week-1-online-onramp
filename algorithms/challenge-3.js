function isDivisbleByN(arr, n) {
  let length = arr.length;
  let newArr = [];

  for (let i = 0; i < length; i++) {
    if (arr[i] % n === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2));
console.log(isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7));

module.exports = isDivisbleByN;
