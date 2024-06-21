const convertToCelsius = function(fahrenheit) {
  let celsius;
  celsius = round((fahrenheit - 32) / 1.8, 1);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = round((celsius * 1.8) + 32, 1);
  return fahrenheit;
};

// THIS CODE BELOW CAME FROM STACK OVERFLOW
function round(value, precision = 0) {
  var multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
// THIS CODE ABOVE CAME FROM STACK OVER FLOW 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));