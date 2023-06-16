function zeros(n) {
  let factorial = 1n;
  let count = 1n;
  while (count <= n) {
    factorial *= count;
    count += 1n;
  }
  const arr = Array.from(String(factorial)).reverse();
  let result = 0;
  for (let el of arr) {
    if (el === "0") {
      result += 1;
    } else {
      break;
    }
  }
  return result;
}

console.log(zeros(30));
