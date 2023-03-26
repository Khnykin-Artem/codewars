const scramble = function (str1, str2) {
  if (str1 === str2) return true;

  const str1Arr = Array.from(str1);
  const str2Arr = Array.from(str2);
  const arr = [];

  str1Arr.forEach((el1, i1) => {
    let i2 = 0;
    while (i2 <= str2Arr.length) {
      const el2 = str2Arr[i2];
      if (el1 === el2) {
        arr[i2] = el2;
        str2Arr[i2] = null;
        break;
      }
      i2++;
    }
  });

  if (arr.join('') === str2) return true;

  return false;
};
