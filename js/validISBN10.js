function validISBN10(isbn) {
  const isbnArr = Array.from(String(isbn));
  if (isbn.length < 10 || isbn.length > 10) return false;
  if (!(isbnArr.slice(0, -1).every((el) => !isNaN(el)))) return false;
  if (isNaN(isbnArr.at(-1)) && !(isbnArr.at(-1) === 'X')) return false;
  let calculatedIsbn = 0;
  isbnArr.forEach((el, index) => {
    let validEl = (isNaN(el)) ? 10 : el;
    const position = index + 1;
    calculatedIsbn += position * validEl;
  });
  if (!(calculatedIsbn % 11 === 0)) return false;
  return true;
}

console.log(validISBN10(1112223339));