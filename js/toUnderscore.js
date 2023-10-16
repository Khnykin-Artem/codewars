function toUnderscore(string) {
  const stringArr = Array.from(String(string));
  return stringArr.reduceRight((acc, el, index) => {
    console.log(acc)
    if (el.toUpperCase() === el && isNaN(el)) {
      (index === 0) ? acc.unshift(el.toLowerCase()) :
      acc.unshift(`_${el.toLowerCase()}`);
      return acc;
    } 
    acc.unshift(el);
    return acc;
  }, []).join('');
}

console.log(toUnderscore('App7Test'))

