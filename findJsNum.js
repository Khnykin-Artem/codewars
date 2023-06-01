const findJsNum = function (str) {
  const regExp = /\d*\.?\d+ | \d+\.?\d*/g;
  let match;
  const result = [];

  while ((match = regExp.exec(str))) {
    result.push(+match[0]);
  }

  return result;
};
