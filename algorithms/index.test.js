const noOfElements = require('./challenge-1')
const divisible = require('./challenge-2')
const isDivisbleByN = require('./challenge-3')
const highestSum = require('./challenge-4')
const replaceDivisible = require('./challenge-5')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(noOfElements([2, 3, 0, 1, 7], 4, 8)).toBe(1)
    expect(noOfElements([3, 3, 3, 5, 18, 6, 20], 15, 30)).toBe(2)
    expect(noOfElements([4, 6, 2, 6, 7, 7], 0, 7)).toBe(6)
    expect(noOfElements([1, 2, 3, 4, 7, 9], 5, 6)).toBe(0)
    expect(noOfElements([100, 100, 100], 100, 100)).toBe(3)
    expect(noOfElements([0, 1, 2, 3, 4], 0, 4)).toBe(5)
    expect(noOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 10)).toBe(7)
    expect(
      noOfElements(
        [
          5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
          95, 100
        ],
        35,
        85
      )
    ).toBe(11)
  })
})

describe('Challenge 2 Tests', () => {
  test('basic tests', () => {
    expect(divisible([2, 3, 12, 18, 42, 24])).toBe(3)
    expect(divisible([100, 84, 37])).toBe(2)
    expect(divisible([5, 8, 6, 12])).toBe(0)
    expect(divisible([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])).toBe(4)
    expect(
      divisible([16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40])
    ).toBe(13)
    expect(divisible([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36])).toBe(4)
    expect(divisible([1, 10, 100])).toBe(1)
    expect(divisible([96, 64, 35, 24, 47, 89, 100, 25, 36, 42])).toBe(6)
  })
})

describe('Challenge 3 Tests', () => {
  test('basic tests', () => {
    expect(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2)).toStrictEqual([6, 6, 4])
    expect(isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7)).toStrictEqual([21, 7])
    expect(isDivisbleByN([5, 10, 15, 20, 25], 5)).toStrictEqual([
      5, 10, 15, 20, 25
    ])
    expect(isDivisbleByN([1, 2, 3, 4, 5, 6, 7], 9)).toStrictEqual([])
    expect(
      isDivisbleByN([10, 20, 30, 40, 50, 60, 80, 100, 130], 25)
    ).toStrictEqual([50, 100])
    expect(isDivisbleByN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    expect(isDivisbleByN([5, 6, 7], 2)).toStrictEqual([6])
  })
})

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1])).toBe(20)
    expect(highestSum([15, 7], [12, 17])).toBe(29)
    expect(highestSum([30], [3, 6, 2, 6])).toBe(30)
    expect(highestSum([5, 10, 15, 20], [1, 10, 100, 1000])).toBe(1111)
    expect(highestSum([10000], [3, 30, 300, 4000])).toBe(10000)
    expect(
      highestSum([30, 45, 60, 21, 9], [2, 4, 6, 8, 10, 20, 30, 40, 50, 500])
    ).toBe(670)
    expect(highestSum([5, 4, 3, 2, 1], [1, 2, 3, 4, 5])).toBe(15)
  })
})

describe('Challenge 5 Tests', () => {
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
    expect(replaceDivisible([1, 2, 3, 4, 5], 1)).toStrictEqual([
      'isDivisible',
      'isDivisible',
      'isDivisible',
      'isDivisible',
      'isDivisible'
    ])
    expect(replaceDivisible([1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([
      1,
      'isDivisible',
      3,
      'isDivisible',
      5,
      'isDivisible',
      7,
      'isDivisible'
    ])
    expect(replaceDivisible([10, 100, 1000], 0)).toStrictEqual([10, 100, 1000])
  })
})
