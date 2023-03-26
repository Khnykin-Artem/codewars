function disemvowelVowel(str, substitute = '', exc = ['Y', 'y']) {
  const letters = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

  const validLetters = letters.filter((letter) => !exc.includes(letter));

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

export default disemvowelVowel;
