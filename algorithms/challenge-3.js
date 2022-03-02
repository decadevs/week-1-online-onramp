function isDivisbleByN(arr, n) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(isDivisbleByN([2, 4, 6, 7], 2));

module.exports = isDivisbleByN;
