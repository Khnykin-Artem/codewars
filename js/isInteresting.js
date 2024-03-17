function isInteresting (number, awesomePhrases) {
  if (String(number).length === 1) return 0;

  if (
    checkZero(number) ||
    checkSame(number) ||
    checkIncementing(number) ||
    checkDecrementing(number) ||
    checkPalindrome(number)
  ) return 2;

  if (checkPalindrome(number + 1) || checkPalindrome(number + 2)) return 1;
  if (checkIncementing(number + 1) || checkIncementing(number + 2)) return 1;
  if (checkDecrementing(number + 1) || checkDecrementing(number + 2)) return 1;
  if (checkZero(number + 1) || checkZero(number + 2)) return 1;

  if (number === awesomePhrases[0] || number === awesomePhrases[1]) return 2;
  if ((number + 1) === awesomePhrases[0] || (number + 1) === awesomePhrases[1]) return 1;
  if ((number + 2) === awesomePhrases[0] || (number + 2) === awesomePhrases[1]) return 1;

  if (number < awesomePhrases[0] && number > awesomePhrases[1]) return 1;
  if ((number + 1) < awesomePhrases[0] && (number + 1) > awesomePhrases[1]) return 1;
  if ((number + 2) < awesomePhrases[0] && (number + 2) > awesomePhrases[1]) return 1;

  return 0;
}

function checkZero (number) {
  if (String(number).length === 2) return false;
  const strNum = Array.from(String(number)).slice(1);
  return strNum.every(el => +el === 0);
}

function checkSame (number) {
  if (String(number).length <= 2) return false;
  const strNum = Array.from(String(number));
  return strNum.every((el) => el === strNum[0]);
}

function checkIncementing (number) {
  if (String(number).length <= 2) return false;

  const strNum = String(number);
  let result = strNum[0];

  for (let i = 1; i < strNum.length; i++)
    result += (+result.at(-1) === 9) ? +result.at(-1) - 9 : +result.at(-1) + 1;
  return +result === number;
}

function checkDecrementing (number) {
  if (String(number).length <= 2) return false;

  const strNum = String(number);
  let result = strNum[0];

  for (let i = 1; i < strNum.length; i++) result += +result.at(-1) - 1;
  return +result === number;
}

function checkPalindrome (number) {
  const strArray = Array.from(String(number));
  if (strArray.length % 2 !== 0) {
    const middleIndex = Math.ceil(strArray.length / 2) - 1;
    strArray[middleIndex] = null;
  }

  const firstPart = [];
  let secondPart = [];
  let checkSecondPart = false;

  strArray.forEach((el) => {
    if (el === null) return checkSecondPart = true;
    if (checkSecondPart) {
      secondPart.push(el);
    } else {
      firstPart.push(el);
    }
  });

  secondPart = secondPart.reverse();

  if (firstPart.join('') === secondPart.join('')) return true;
  return false;
}

