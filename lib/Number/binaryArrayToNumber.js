'use strict';

const binaryArrayToNumber = function (arr) {
  const binaryNumber = arr.join('');
  return parseInt(binaryNumber, 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
