const persistence = function(num) {
    if(String(num).length === 1) {
        return 0;
    }

    let result = Array.from((num + ''));
    let count = 0;

    while(String(result).length !== 1) {
        resultNumber = result.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        }, 1)
        result = Array.from((resultNumber + ''));
        count++;
    }

    return count;
}

