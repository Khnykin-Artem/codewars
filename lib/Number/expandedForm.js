const expandedForm = function (num) {
  const result = [];
  const numArray = Array.from(String(num)).reverse();

  for (let i in numArray) {
    if (numArray[i] !== '0') {
      const newNumArr = [numArray[i]];
      newNumArr.length = Number(i) + 1;
      newNumArr.fill(0, 1);
      result.push(newNumArr.join(''));
    }
  }

  return result.reverse().join(' + ');
};
