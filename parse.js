const parse = function (data) {
  const dataArr = Array.from(data);
  const result = [];
  let num = 0;

  dataArr.forEach((el) => {
    switch (el) {
      case 'i':
        num += 1;
        break;

      case 'd':
        num -= 1;
        break;

      case 's':
        num **= 2;
        break;

      case 'o':
        result.push(num);
        break;
    }
  });

  return result;
};
