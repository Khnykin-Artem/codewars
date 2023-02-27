const expandedForm = function(num) {
    const result = [];
    const numArray = (Array.from(String(num))).reverse();

    for(let el of numArray) {
        if(el !== '0') {
            const newNumArr = [el];
            newNumArr.length = numArray.indexOf(el) + 1
            newNumArr.fill(0, 1);
            result.push(newNumArr.join(''))
        }
    }

    return result.reverse().join(' + ');
}

