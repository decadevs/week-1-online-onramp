const replaceDivisible = require('./index')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(replaceDivisible([2, 4, 3, 6, 5], 3)).toStrictEqual([
      2,
      4,
      'isDivisible',
      'isDivisible',
      5
    ])
    expect(replaceDivisible([12, 4, 3, 6, 5], 2)).toStrictEqual([
      'isDivisible',
      'isDivisible',
      3,
      'isDivisible',
      5
    ])
  })
})
