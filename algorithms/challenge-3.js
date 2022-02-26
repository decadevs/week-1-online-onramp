function isDivisbleByN(arr, n) {}
let length = arr.length
let newArr=[];

for(let n = 0; n<lenth;n++){
  if(arr[n]%n===0) {
    newArr.push(arr[n];
                }
  }
return newArr;
}
console.log(isDivisibleByN([1,3,5,6,3,6,7,4],2));
console.log(isDivisibleByN([21,3,5,6,3,6,7,4],7));


module.exports = isDivisbleByN
