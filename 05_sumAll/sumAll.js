const sumAll = function (value1, value2) {
  let result = 0;
  let handler = 0;

  if (value1 > value2) {
    handler = value1;
    value1 = value2;
    value2 = handler;
  }

  if (
    value1 < 0 ||
    value2 < 0 ||
    !Number.isInteger(value1) ||
    !Number.isInteger(value2)
  ) {
    return `ERROR`;
  }

  for (i = value1; i <= value2; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4));
