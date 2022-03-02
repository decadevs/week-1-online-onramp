function replaceDivisible(x, y) {
  let newArray = [];
  newArray = x.map((value) => {
    if (value % y === 0) {
      value = "isDivisible";
    }
    return value;
  });
  return newArray;
}
replaceDivisible([2, 4, 3, 6, 5], 3);

module.exports = replaceDivisible;
