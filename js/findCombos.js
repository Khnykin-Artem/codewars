function findCombos(arr) {
  const flatArr = arr.flat(Infinity);
  const counter = new Map();
  let factorial = 1;
  flatArr.forEach((el, index) => {
    factorial *= index + 1;
  })
  flatArr.forEach((el) => {
    if (counter.has(el)) {
      counter.set(el, counter.get(el) + 1);
    } else {
      counter.set(el, 1);
    }
  });
  return factorial / [...counter.values()].reduce((acc, el) => {
    acc *= getFactorial(el);
    return acc;
  }, 1)
}

function getFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(findCombos([1, 2, 3]));
