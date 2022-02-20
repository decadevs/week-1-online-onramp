const divisible = require('./index')

describe('Challenge 2 Tests', () => {
  test('basic tests', () => {
    expect(divisible([2, 3, 12, 18, 42, 24])).toBe(3)
    expect(divisible([100, 84, 37])).toBe(2)
    expect(divisible([5, 8, 6, 12])).toBe(0)
  })
})
