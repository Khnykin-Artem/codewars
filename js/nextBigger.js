function nextBigger(n) {
  const splitNumber = Array.from(String(n));
  let copySplitNumber = Array.from(String(n));
  let i = splitNumber.length - 1;
  while (i >= 0) {
    if (splitNumber[i] <= splitNumber[i - 1]) {
      i--;
      continue;
    }
    let copySplitNumberLastPast = copySplitNumber.slice(i);
    copySplitNumberLastPast.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    });
    const copySplitNumberLastPastFiltered = copySplitNumberLastPast.filter(
      (el) => el > copySplitNumber[i - 1]
    );
    let stop = false;
    copySplitNumberLastPast = copySplitNumberLastPast.map((el) => {
      if (stop) return el;
      if (+el === Math.min(...copySplitNumberLastPastFiltered)) {
        stop = true;
        return copySplitNumber[i - 1];
      } else {
        return el;
      }
    });
    copySplitNumber[i - 1] = Math.min(...copySplitNumberLastPastFiltered);
    copySplitNumber[i] = splitNumber[i - 1];
    console.log(
      copySplitNumber[i - 1],
      copySplitNumber[i],
      copySplitNumberLastPast
    );
    copySplitNumber.splice(
      i,
      copySplitNumberLastPast.length,
      ...copySplitNumberLastPast
    );
    if (+copySplitNumber.join("") > +splitNumber.join(""))
      return +copySplitNumber.join("");
    copySplitNumber = Array.from(String(n));
    i--;
  }
  return -1;
}

