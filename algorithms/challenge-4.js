function highestSum(x, y) {}
let SumX=1
let SumY=1

for(let i=1;i<xlength;i++) {
  SumX+=X[i];
  }
for(letj=1;j<Ylength;j++) {
  SumY+=Y[j];
  }
if(SumY>SumX) SumX=SumY;
return SumX;
}
console.log(highestSum([2,5,1,0,5,7],(2,3,5,6,2,1])));
console.log(highestSum([15,7,[12,17]));
            console.log(highestSum([30],[3,6,2,6]));

module.exports = highestSum
