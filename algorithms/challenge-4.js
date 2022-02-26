function highestSum(x, y) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < x.length; i++) {
    sum += x[i];
    //sum2 += y[i]
  }

  for (let j = 0; j < y.length; j++) {
    sum2 += y[j];
  }

  if (sum > sum2) {
    return sum;
  } else {
    return sum2;
  }
}

highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]);
highestSum([15, 7], [12, 17]);
highestSum([30], [3, 6, 2, 6]);

module.exports = highestSum;
