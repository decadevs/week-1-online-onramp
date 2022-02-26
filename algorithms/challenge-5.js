function replaceDivisible(x, y) {
    for(var i = 0; i < x.length; i++){
        if (x[i] % y === 0){
            x[i] = 'isDivisible';
        }
    }
    return x;
}

module.exports = replaceDivisible
