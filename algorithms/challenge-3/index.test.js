const isDivisbleByN = require('./index')

describe('Challenge 3 Tests', () => {
  test('basic tests', () => {
    expect(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2)).toStrictEqual([4, 6])
    expect(isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7)).toStrictEqual([21, 7])
  })
})
