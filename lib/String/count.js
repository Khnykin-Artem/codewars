const count = function (string) {
    if(string === '') return {};

    const strArr = Array.from(string);
    const result = {};

    strArr.forEach((el) => {
        if(el in result) {
            result[el] += 1;
        } else {
            result[el] = 1;
        }
    })

    return result;
}