const addBinary = function (a, b) {
    const decimalSum = a + b;
    const binaryNum = decimalSum.toString(2);
    return binaryNum;
}

console.log(addBinary(1, 1))