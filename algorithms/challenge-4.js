function highestSum(x, y) {
    let sum = 0;
    function sumArrayElements(z){
        let arrSum = 0;
        for(var i =0; i < z.length; i++){
            arrSum += z[i];
        }
        return arrSum;
    }
    let arrSumX = sumArrayElements(x);
    let arrSumY = sumArrayElements(y);
    if (arrSumX > arrSumY){
        sum = arrSumX;
    }
    else if ( arrSumY > arrSumX){
        sum = arrSumY;
    }
    else{
        sum = "They are equal";
    }
    return sum;
}

module.exports = highestSum