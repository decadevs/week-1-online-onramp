const noOfElements = require('./index')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(noOfElements([2, 3, 0, 1, 7], 4, 8)).toBe(1)
    expect(noOfElements([3, 3, 3, 5, 18, 6, 20], 15, 30)).toBe(2)
    expect(noOfElements([4, 6, 2, 6, 7, 7], 0, 7)).toBe(6)
  })
})
