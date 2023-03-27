function extractCurrencyValue(str) {
  let validStr = str;
  let parseFloatStr = Number.parseFloat(validStr);

  if (Number.isNaN(parseFloatStr)) {
    while (Number.isNaN(+parseFloatStr)) {
      parseFloatStr = Number.parseFloat(validStr);
      validStr = validStr.slice(1);
    }

    return parseFloatStr;
  }
  return parseFloatStr;
}

export default extractCurrencyValue;
