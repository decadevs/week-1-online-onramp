# Challenge 1

Implement the function noOfElements(x, y, z) which returns the number of elements in that array x, that are greater than or equal to the variable y and less than or equal to the variable z

## Examples

noOfElements([2,3,0,1,7], 4, 8) to return 1 \
noOfElements([3,3,3,5,18,6,20], 15, 30) to return 2 \
noOfElements([4,6,2,6,7,7], 0, 7) to return 6



# Challenge 2

Implement the function divisible(a) which returns the number of the elements in that array a that are divisible by 2 and greater than 15.

## Examples

divisible([2,3,12,18,42,24]) to return 3 \
divisible([100,84,37]) to return 2 \
divisible([5,8,6,12]) to return 0



# Challenge 3

Implement the function isDivisbleByN(arr, n) which extracts all the values in the input array arr that are divisible by n into another array and returns the new array.

## Examples

isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [6, 6, 4] \
isDivisbleByN([21,3,5,6,3,6,7,4], 7) to return [21, 7]



# Challenge 4

Implement the function highestSum(x, y) where x and y are both arrays, return the sum of the array with the highest value when it's elements are summed respectively.

## Examples

highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) to return 20 \
highestSum([15,7], [12,17]) to return 29 \
highestSum([30], [3,6,2,6]) to return 30



# Challenge 5

Implement the function replaceDivisible(x, y) which replaces all numbers in an array, x divisible by an integer, y with string “isDivisible”

## Examples
replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5] \
replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]