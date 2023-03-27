const generateHashtag = function (str) {
  if (str === '') {
    return false;
  }

  const strSplit = str.split(' ');

  const strArr = strSplit
    .filter((el) => el !== '')
    .map((word) => word.replace(word[0], word[0].toUpperCase()));
  strArr.unshift('#');

  const result = strArr.join('');

  if (result.slice(1).length >= 140 || result === '#') {
    return false;
  }
  return result;
};

export default generateHashtag;
