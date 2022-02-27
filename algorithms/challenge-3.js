function isDivisbleByN(arr, n) {
    let dividend = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n === 0) {
            dividend.push(arr[i]);
        }
    }
    return dividend;
}

module.exports = isDivisbleByN
