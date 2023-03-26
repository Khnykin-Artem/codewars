function disemvowelConsonants(str, substitute = '', exc = ['Y', 'y']) {
  const letters = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',

    'B',
    'C',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const validLetters = letters.filter((letter) => exc.includes(letter));

  const splitStr = str.split('');
  return splitStr
    .map((letter) => {
      if (validLetters.includes(letter)) {
        return substitute;
      }
      return letter;
    })
    .join('');
}

export default disemvowelConsonants;
