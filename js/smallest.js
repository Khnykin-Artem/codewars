function smallest(n) {
  const result = Array.from(String(n));
  let a = 0;
  let b = 0;

  const allMin = [];
  const copyResult = JSON.parse(JSON.stringify(result));
  for (let i = 0; i < result.length; i++) {
    const index = copyResult.findIndex((el) => el === Math.min(...copyResult));
    allMin.push(copyResult[index]);
    delete copyResult[index];
  }
  const uniqAllMin = [...new Set(allMin)];

  return [result, a, b];
}
