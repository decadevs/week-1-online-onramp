function highestSum(x, y) {
    let sumOfX = 0;
    let sumOfY = 0;
    for (let i = 0; i < x.length; i++) {
        sumOfX += x[i];
    }
    for (let j = 0; j < y.length; j++) {
        sumOfY += y[j];
    }
    if (sumOfX > sumOfY) {
        return sumOfX;
    } else if (sumOfY > sumOfX) {
        return sumOfY;
    }
    else {
        return sumOfX;
    }
}

module.exports = highestSum