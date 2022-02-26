function replaceDivisible(x, y) {
  let index = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] % y === 0) {
      index = x.indexOf(x[i]);
      x[index] = "isDivisible";
    } else {
      x[index] = x[i];
    }
    console.log(x);
  }
}
replaceDivisible([2, 4, 3, 6, 5], 3);

module.exports = replaceDivisible;
