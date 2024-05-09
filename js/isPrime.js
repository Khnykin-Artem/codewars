const isPrime = function (num) {
  const results = [];

  if (num === 1) {
    return false;
  }

  let i = 1;
  while (i <= num) {
    num % i === 0 ? results.push(true) : results.push(false);
    i++;
  }

  if (results[0] && results[results.length - 1]) {
    const result = results.slice(1, results.length - 1).every((el) => {
      return el === false;
    });

    return result;
  }

  return false;
};
