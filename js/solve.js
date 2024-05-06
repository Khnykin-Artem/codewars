function solve(n) {
  const len = String(n).length - 1;
  const parsedN = Array.from(String(n - powStr(9, len)));
  return +parsedN.reduce((acc, el) => +acc + (+el)) + (9 * len);
}

function powStr (n, count) {
  const result = [];
  for (let i = 0; i < count; i++) result.push(`${n}`);
  return result.join('');
}
