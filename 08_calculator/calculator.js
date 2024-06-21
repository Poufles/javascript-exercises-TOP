const add = function (...value) {
  let result = 0;
  for (num of value) {
    result += num;
  }

  return result;
};

const subtract = function (...value) {
  let result = 0;
  console.log(value.indexOf(10));
  for (num of value) {
    if (value[value.indexOf(num)] === value[0]) result += num;
    else result -= num;
  }

  return result;
};

const sum = function (value) {
  let result = 0;
  for (num of value) {
    result += num;
  }

  return result;
};

const multiply = function (value) {
  let result = 1;
  for (num of value) {
    result *= num;
  }

  return result;
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (value) {
  let result = 1;
  for (i = 1; i <= value; i++) {
    result *= i;
  } 

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

console.log(add(3, 2));
console.log(subtract(10, 4));
console.log(sum([]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(4, 3));
console.log(factorial(10));
