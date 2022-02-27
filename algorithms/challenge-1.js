function noOfElements(x, y, z) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= y && x[i] <= z) {
            arr.push(x[i]);
        }
    }
    return arr.length;
}

module.exports = noOfElements;