const pigIt = function (str, ending = "ay") {
  const strArr = Array.from(str);
  const strArrSplit = [[]];
  const regExp = /[\.,!\?;:\-]/;

  let count = 0;
  let firstEl = strArr[0];
  strArr.forEach((el, i) => {
    if (el !== " " && i !== 0) {
      if (i + 1 === strArr.length || strArr[i - 1] !== " ") {
        strArrSplit[count].push(el);
        if (!regExp.test(el)) {
          (strArr[i + 1] === " " || str[i + 1] === undefined) &&
            strArrSplit[count].push(firstEl + ending + " ");
        }
      }
    } else if (el === " ") {
      count += 1;
      firstEl = strArr[i + 1];
      strArrSplit[count] = [];
    }
  });

  const result = strArrSplit.flat(1).join("").trim();
  return result;
};


