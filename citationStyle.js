function citationStyle(str) {
  const regExp = /[^A-Za-z\d]'(.*?)'[^A-Za-z\d]/g;
  return str.replace(regExp, ' "$1"');
};

export default citationStyle;
