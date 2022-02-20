const highestSum = require('./index')

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1])).toBe(20)
    expect(highestSum([15, 7], [12, 17])).toBe(29)
    expect(highestSum([30], [3, 6, 2, 6])).toBe(30)
  })
})
