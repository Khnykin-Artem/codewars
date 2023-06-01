const uniqueInOrder = function (iterable) {
  const array = [];
  let count = 0;

  Array.from(iterable).forEach((el, i, arr) => {
    if (el === arr[i - 1]) {
      array[count].push(el);
    } else {
      ++count;
      array[count] = [];
      array[count].push(el);
    }
  });

  const newArray = array.map((el) => {
    if (Array.isArray(el) === true) {
      const unique = new Set(el);
      const arr = Array.from(unique);
      return arr;
    }
  });

  const result = newArray.flat(1);
  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
