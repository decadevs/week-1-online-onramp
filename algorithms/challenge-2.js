function divisible(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0 && a[i] > 15) {
            arr.push(a[i]);
        }
    }
    return arr.length;
}

module.exports = divisible 