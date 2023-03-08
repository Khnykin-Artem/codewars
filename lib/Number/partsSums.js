const partsSums = function (ls) {
    if(Array.isArray(ls) && ls.length === 0) {
        return [0]
    }
    
    const sumArr = [];

    const length = ls.length;
    let count = 1;

    const sum = ls.reduce((acc, el) => {
        return acc + el;
    }, 0);
    sumArr.push(sum);

    while(count < length) {
        sumArr.push(sumArr[count - 1] - ls[count - 1]);
        count++;
    }

    const result = sumArr;
    result.push(0);

    return result;
}
