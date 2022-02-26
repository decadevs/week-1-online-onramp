function divisible(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0 && a[i] > 15) {
      count += 1;
    }
  }

  return count;
}

console.log(divisible([2, 3, 12, 18, 42, 24]));
console.log(divisible([100, 84, 37]));
console.log(divisible([5, 8, 6, 12]));

module.exports = divisible;
