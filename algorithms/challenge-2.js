function divisible(a) {
    let count =  0;
    for(var i = 0; i < a.length; i++){
        if(a[i] % 2=== 0 && a[i] > 15){
            count++;
        }
    }
    return count;
}

module.exports = divisible
